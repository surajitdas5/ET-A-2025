const mongoose = require('mongoose')

const DB_URL="mongodb+srv://sdas:12345@cluster0.pahbl.mongodb.net"
const DB_NAME="event-a"

async function dbConnect(){
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Database Connected")
    } catch (error) {
        throw error
    }
}

module.exports = dbConnect