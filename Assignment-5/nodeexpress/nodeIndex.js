const fs = require('fs')
const http = require('http')

const server = http.createServer(function(req, res){
    console.log(req.url);
    const path = req.url
    if(path==="/"){
        // res.write("<h1>Hello World</h1>");
        // res.end()
        fs.readFile("public/index.html", "utf-8", (error, data)=>{
            if(error){
                res.write("<h1>500: Server Error</h1>")
            } else {
                res.write(data)
            }
            res.end()
        })
    } else if(path === "/about"){
        // res.write("<h1>About Us</h1>");
        // res.end()
        fs.readFile("public/about.html", "utf-8", (error, data)=>{
            if(error){
                res.write("<h1>500: Server Error</h1>")
            } else {
                res.write(data)
            }
            res.end()
        })
    } else {
        res.write("<h1>404</h1>");
        res.end()
    }
})


server.listen(5000, function(){console.log("Server Started at 5000")})