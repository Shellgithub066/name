import express from 'express';
const router = express.Router();
//import asyncHandler from '../middleware/asyncHandler.js';
//import Product from '../models/productModel.js';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
    getTopProducts1,
    getTopProducts2,
    getTopProducts3,

} from '../contollers/productController.js'
import {protect , admin} from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectid.js';
router.route('/').get(getProducts).post(protect , admin , createProduct);
router.get('/top' ,getTopProducts);
router.get('/top1' ,getTopProducts1);
router.get('/elektronik' ,getTopProducts2)
router.get('/top3' ,getTopProducts2)




router.route('/:id').get(checkObjectId , getProductById).put(protect ,checkObjectId,admin,updateProduct).delete(protect, checkObjectId,admin,deleteProduct);
router.route('/:id/reviews').post(protect,checkObjectId ,createProductReview);





export default router ;