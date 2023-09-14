const mongoose = require("mongoose");
const {getUSER,postUSER, deleteUSER, register} = require("../Controller/UserControl");
const express=require("express");
const userRout=express.Router();

userRout.get("/get",getUSER);
userRout.post("/addNew",postUSER);
userRout.delete("/delete/:id", deleteUSER )
userRout.post('/register', register)
module.exports=userRout