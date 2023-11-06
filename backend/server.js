import path from 'path';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/UploadRoutes.js'
import cookieParser from 'cookie-parser';
import { notFound,errorHandler } from './middleware/ErorMiddleware.js';

connectDB();
    
const port  = process.env.PORT || 5000; 
const app = express();

/*
var iyzipay = new Iyzipay({
    apiKey: 'your api key',
    secretKey: 'your secret key',
    uri: 'https://sandbox-api.iyzipay.com'
});
*/

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}))





app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload' , uploadRoutes);

app.get('/api/config/mastercard' , (req,res) =>res.send({
    clientId:process.env.MASTER_CARD_CLIENT_ID
}))

const _dirname = path.resolve();
app.use('/uploads' , express.static(path.join(_dirname, '/uploads')))

if(process.env.Node_ENV === 'production'){
    app.use(express.static(path.join(__dirname , '/frontend/build')));

    app.get('*' , (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend' ,'build' ,'index.html'))
    );
}else {
    app.get('/' ,(req,res) => {
        res.send('API is running...')
    });
}

app.use(notFound)
app.use(errorHandler)









 
app.listen(port, () =>console.log(`server runing on port ${port}`))


