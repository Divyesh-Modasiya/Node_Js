const http = require("http");

const port = 8000;


const Handler = (req,res) =>{
    res.write("<h1>Server satrted + {port}</h1>");
    res.end();
}

const server = http.createServer(Handler);

server.listen(port,(err)=>{
    err ? console.log(err)
     : console.log("server started " + port);
     
})