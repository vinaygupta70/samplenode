// const http=require("http");
// const PORT=2000;
// const hostname="localhost";

// const server=http.createServer((req, res) =>{
//     res.end("working");
// });

// server.listen(PORT, hostname, ()=>{
//     console.log('server is working on http://${hostname}:${PORT}');
// });


//more learning........
const http=require("http");
const fs=require("fs");
const PORT=2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html", "utf-8");
const server=http.createServer((req, res) =>{
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<h1> about page</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1> contact page</h1>");
    }
    if(req.url === "/service"){
        return res.end("<h1> service page</h1>");
    }
    else{
        return res.end("404 page not found...")
    }

});

server.listen(PORT, hostname, ()=>{
    console.log('server is working on http://${hostname}:${PORT}');
});