const path = require("path");


const filePath = "user/naveen/projects/demo/app.js";

console.log("base name:" ,path.basename(filePath));
console.log("Directory name:" ,path.dirname(filePath));
console.log("Extension name:" ,path.extname(filePath));

//text.txt
console.log(__dirname)

console.log("Joined path",  path.join(__dirname,"demo","test.txt"))