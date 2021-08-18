import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema

const Schema = mongoose.Schema;
//
const postUserData = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    id:{
        type:String,
        required : true,
    }
});
var userPostData = mongoose.model("userposts",postUserData);

export default userPostData;


