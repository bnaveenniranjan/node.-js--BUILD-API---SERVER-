const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/",async (req,res) =>{
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved)
})
// get all users
router.get("/",async (req,res)=>{
    const users  = await User.find();
    res.status(201).json(users)
})
//get Single User
router.get("/:id",async (req,res)=>{
    console.log(req.params.id)
    const users = await User.findById(req.params.id);
    res.status(201).json(users)
})

// update user -PUT/api/users/:id
router.get("/:id",async (req,res)=>{
    console.log(req.params.id)
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(users)
})

//delete user -api/user/id
router.get("/:id",async (req,res)=>{
   // console.log(req.params.id)
    const user = await User.findByIdAndDelete(req.params);
    res.sendStatus(204)
})
module.exports =  router;