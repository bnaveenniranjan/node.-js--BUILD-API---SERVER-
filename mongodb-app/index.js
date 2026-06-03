const express = require('express');
const  db = require('./db');
const app = express();
const User = require("./models/User");

app.use(express.json)
//user Routes
app.post("/api/users",(req,res) =>{
    const data = req.boby;
    console.log(data);
})

app.listen(3000,()=>{
    console.log("server listening to http://localhost:3000")
})