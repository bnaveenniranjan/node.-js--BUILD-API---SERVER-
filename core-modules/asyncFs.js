const fs =  require("fs");

// Write File (Asynchronous)
fs.writeFile("asyncTest.txt","hello Nodejs  2025 Async + Read File ",(err) =>{
    if(err) throw err; 
    console.log("File written completed")

fs.readFile("asyncTest.txt",{encoding:"utf-8"},(err,data) => {    
    console.log("Read  File Async ",data);
    })
});
console.log("FIle writing processing")