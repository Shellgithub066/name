import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema;


const subSchema =  mongoose.Schema({
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
    },

    parent:{
        type : ObjectId , 
        ref : 'Category',
        required : true ,

    } ,

});

const SubCategory = mongoose.models.SubCategory || mongoose.model('SubCategory' ,subSchema);

export default SubCategory;

