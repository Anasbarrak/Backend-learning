const mongoose = require('mongoose');
const user=require('../Model/User');

exports.getUSER=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({message:'done', getuser})
        
    } catch (error) {
        res.status(500).send(error)

    }
}

exports.postUSER=async(req,res)=>{
    try {
        const newUser=new user(req.body)
        await newUser.save()
        res.status(200).send({message:'Added',newUser})
    } catch (error) {
        res.status(500).send(error)
        
    }
}
exports.deleteUSER=async(req, res)=>{
    try {
        const deleteuser = await user.findByIdAndDelete(req.params.id)
        res.status(200).send({message: "Deleted successfully", deleteuser})
    } catch (error) {
        res.status(500).send(error)
    }
}