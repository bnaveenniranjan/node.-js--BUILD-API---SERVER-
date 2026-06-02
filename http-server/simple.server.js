const http = require('http');
const fs = require('fs');

// Create Server
const server = http.createServer((req,res) => {
    if (req.url =="/")  {
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end(`Home Page`);
    } else if(req.url == "/about"){
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end(`About Page`);
    } else if(req.url == "/file"){
         const ReadStream = fs.createReadStream("./sample.mp4")
        res.writeHead(200,{"content-type":"video/mp4"});
        ReadStream.pipe(res);
      // res.end('About Page');
    } else{
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end('404 Page not found');
    }
    
});

server.listen(5000,() => {
    console.log("server listening http://localhost:5000")
});