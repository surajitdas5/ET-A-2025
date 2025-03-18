const Event = require('./../models/event.model.js')

const addEvent = async (req, res) => {
    try {
        let event = req.body
        let fileName = req.file.filename
        event.eventImage = fileName
        event.status = 'active'
        // console.log(event);
        event = await Event.create(event)
        res.status(201).send(event)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const allEvent = async (req, res) => {
    try {
        let events = await Event.find().populate("user")
        let modEvents = events.map( event => (
            {
                ...event.toObject(),
                eventImage: "http://localhost:5000/uploads/"+event.eventImage
            }
        ))
        res.status(200).send(modEvents)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

const updateEventImage = async (req, res) => {
    try {
        let { id } = req.params
        let fileName = req.file.filename
        let event = await Event.findOneAndUpdate({_id: id}, {"eventImage": fileName}, {new: true})
        res.status(200).send(event)
    } catch (error) {
        res.status(400).send({"message": error.message})
    }
}

module.exports = {
    addEvent,
    allEvent,
    updateEventImage
}