import mongoose from "mongoose";

const Schema = mongoose.Schema;
//
const commentData = new Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    id:{
        type:String,
        required:true,
    }
});
var commentDetail = mongoose.model("commentDetail",commentData);

export default commentDetail;


