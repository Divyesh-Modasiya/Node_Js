const http = require("http");
const port = 1515;

const handle = (req,res) => {
    res.write("<h1>Welcome user</h1>");
    res.end();

}

const server = http.createServer(handle);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on " + port);
    
})