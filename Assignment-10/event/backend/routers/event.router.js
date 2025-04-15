const express = require('express')

const {
    addEvent,
    allEvent,
    updateEventImage,
    getEventById,
    searchEventsByTitle,
    updateEvent,
    getCurrentUserEvents
} = require ('./../controllers/event.controller.js')
const upload = require('./../midllewares/fileUpload.middleware.js')
const verifyToken = require('../midllewares/auth.middleware.js')

const eventRouter = express.Router()


eventRouter.post("/", verifyToken, upload.single('eventImage'), addEvent)
eventRouter.get("/", allEvent)
eventRouter.get("/search", searchEventsByTitle)
eventRouter.get("/user", verifyToken, getCurrentUserEvents)
eventRouter.get("/:id", getEventById)
eventRouter.put("/image/:id", verifyToken, upload.single('eventImage'), updateEventImage)
eventRouter.put("/:id", verifyToken, updateEvent)


module.exports = eventRouter