const http = require("http");
const port = 8000;

const Handel = (req, res) => {
   
    res.write(`
        <div style = "background-color:black; width:100%; height:100vh; display:flex; align-items: center;	justify-content: center; margin:0px; padding:0px;">
        <h1 style="color: red; font-size: 50px; text-align: center;">
            Server Started
        </h1>
        </div>
    `);
    res.end();
}

const server = http.createServer(Handel);

server.listen(port, (err) => {
    err ? console.log(err)
        : console.log("server started on port " + port);
});
