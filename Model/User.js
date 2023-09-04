const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true} ,
    Email: String,
    Age: Number,
    Phone_Number: Number
})
module.exports = mongoose.model('user', userSchema)