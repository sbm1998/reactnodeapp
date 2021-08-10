import mongoose from 'mongoose';
//
const dataSchema=mongoose.Schema({
    name: String,
    email: String,
    city: String,
})

var datainfo = mongoose.model('datainfo',dataSchema);
//
export default datainfo;
