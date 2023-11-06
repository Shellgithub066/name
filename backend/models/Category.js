import mongoose from "mongoose";


const {ObjectId} = mongoose.Schema;

const categorySchema = mongoose.Schema({
    name : {
        type:String,
        maxLenght: [2 , "must be atleast 2 characters"],
        minLenght: [32 , "must be atleast 2 characters"],

         
        
    },
    slug : {
        type  : String,
        required : true ,
        unique : true , 
        lowercase : true,
        index : true ,
    }

},
{
    timestamps: true,
}
)


const Category = mongoose.models.Category || mongoose.model('Category' , categorySchema);

export default Category;