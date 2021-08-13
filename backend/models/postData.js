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
    city: {
        type: String,
    },
});
var userinfo = mongoose.model("userinfo",userData);

export default userinfo;