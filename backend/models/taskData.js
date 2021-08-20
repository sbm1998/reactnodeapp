import mongoose from "mongoose";

const Schema = mongoose.Schema;
//
const taskData = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    stime:{
        type:String,
        required:true,
    },
    etime:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    }
});
var addtask = mongoose.model("addtask",taskData);

export default addtask;