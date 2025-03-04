const mongoose = require('mongoose')

const DB_URL="YOUR_MONGODB_URL"
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