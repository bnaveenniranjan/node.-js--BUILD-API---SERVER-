const fs =  require("fs");

// Write File (Asynchronous)
fs.writeFile("asyncTest.txt","hello Nodejs  2025 Async",(err) =>{
    if(err) throw err; 
    console.log("File written completed")
});

console.log("FIle writing processing")