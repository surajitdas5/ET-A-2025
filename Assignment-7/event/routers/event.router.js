const express = require('express')

const {
    addEvent,
    allEvent,
    updateEventImage
} = require ('./../controllers/event.controller.js')
const upload = require('./../midllewares/fileUpload.middleware.js')

const eventRouter = express.Router()


eventRouter.post("/", upload.single('eventImage'), addEvent)
eventRouter.get("/", allEvent)
eventRouter.put("/:id", upload.single('eventImage'), updateEventImage)


module.exports = eventRouter