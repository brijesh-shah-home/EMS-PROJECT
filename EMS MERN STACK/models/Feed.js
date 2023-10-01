const mongoose = require('mongoose')

const FeedSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String
})
// collection name here 
const FeedModel = mongoose.model("feedback", FeedSchema)
module.exports = FeedModel