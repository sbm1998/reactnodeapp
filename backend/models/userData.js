import mongoose from "mongoose";

const Schema = mongoose.Schema;
//
const userData = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
});
var userDetail = mongoose.model("userDetail",userData);

export default userDetail;