const express = require('express');
const app = express();

app.use((req, res ,next)=>{
    console.log("request URL",req.url);
    next();  
})
app.get("/",(req,res) => {
    res.status(200).send("Hello Express App")
      
})
app.post("/",(req,res) => {
    res.status(200).send("Hello Express App ! . this is post method")
})

app.listen(5000,() => {
    console.log("server listening on port 5000")
})