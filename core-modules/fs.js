const fs = require('fs');

// write File
//fs.writeFileSync("xerox.txt","hello bro , keep going");
//console.log("File written!");

//Read File (synchronous)
const data = fs.readFileSync("xerox.txt",{encoding : "utf-8"});
console.log("read Synchronously " ,data)