const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    name: String,
    venue: String,
    date: String
})
// collection name here 
const EventModel = mongoose.model("events", EventSchema)
module.exports = EventModel