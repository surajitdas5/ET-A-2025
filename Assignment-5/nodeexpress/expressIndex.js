const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

// routes
app.get("/", (req, res)=>{
    // res.send("<h1>Express Server</h1>")
    // res.sendFile("public/index.html") // error
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "about.html"))
})



app.listen(5000, ()=>{console.log("Server Started at 5000")})