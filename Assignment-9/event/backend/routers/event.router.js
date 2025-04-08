const express = require('express')

const {
    addEvent,
    allEvent,
    updateEventImage,
    getEventById,
    searchEventsByTitle
} = require ('./../controllers/event.controller.js')
const upload = require('./../midllewares/fileUpload.middleware.js')

const eventRouter = express.Router()


eventRouter.post("/", upload.single('eventImage'), addEvent)
eventRouter.get("/", allEvent)
eventRouter.get("/search", searchEventsByTitle)
eventRouter.get("/:id", getEventById)
eventRouter.put("/image/:id", upload.single('eventImage'), updateEventImage)


module.exports = eventRouter