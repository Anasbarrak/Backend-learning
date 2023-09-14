const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const user=require('../Model/User');
const { JsonWebTokenError } = require('jsonwebtoken');

exports.getUSER=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({message:'Done', getuser})
        
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
exports.register= async(req, res)=>{
    const {name,Email, Password, Age, Phone_Number}= req.body
    try {
        const find= await user.findOne({Email})
        if (find) {
            res.status(400).send({message: 'Email already registered'})   
        }
        else {
            const NewUser = new user(req.body)
            const salt=10
            const hashpassword= bcrypt.hashSync(Password, salt)
            NewUser.Password = hashpassword
            const data = {
                id: user._id,
            }
            const token = jwt.sign(data, '123456')
            await NewUser.save()
            res.status(200).send({message: 'Registered successfully', NewUser, token})
        }
    } catch (error) {
        res.status(500).send({message:'Registering failed', error})
    }
}
