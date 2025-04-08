const path = require('path')
const cors = require('cors')
const express = require('express')
const dbConnect = require('./utils/db.js')
const userRouter = require('./routers/user.router.js')
const eventRouter = require('./routers/event.router.js')
const logger = require('./midllewares/logger.middlewares.js')
const upload = require('./midllewares/fileUpload.middleware.js')

// const dotenv = require('dotenv')
// dotenv.config();
// or
require('dotenv').config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
// app.use(logger)

app.get("/", logger, (req, res)=>{
    res.send("Welcome to Event Portal")
})
app.post("/",upload.single('myImg'), (req, res)=>{
    console.log(req.file)
    res.send("Okay")
})

app.use("/users/",userRouter)
app.use("/events", eventRouter)

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    dbConnect();
})