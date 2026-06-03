const express = require('express');
const  db = require('./db');
const app = express();

const userRoutes = require('./routes/user')
app.use(express.json())
//user Routes
app.use("/api/users",userRoutes)



app.listen(3000,()=>{
    console.log("server listening to http://localhost:3000")
})