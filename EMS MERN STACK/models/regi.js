const mongoose = require('mongoose')

const RegiSchema = new mongoose.Schema({
    fullname: String,
    eventname: String,
    ticket: String,
    contact:String,
    city:String
})
// collection name here 
const RegiModel = mongoose.model("regi", RegiSchema)
module.exports = RegiModel