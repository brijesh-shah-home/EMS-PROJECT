const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EventModel = require('./models/Event')
const RegiModel = require('./models/regi')
const FeedModel = require('./models/Feed')

const app = express()
app.use(cors())
app.use(express.json())

//Mongodb connection

mongoose.connect("mongodb://127.0.0.1:27017/espotter")

app.get('/', (req, res) => {
    EventModel.find({})
        .then(events => res.json(events))
        .catch(err => res.json(err))
})

app.get('/getEvent/:id', (req, res) => {
    const id = req.params.id;
    EventModel.findById({ _id: id })
        .then(events => res.json(events))
        .catch(err => res.json(err))
})

app.put('/updateEvent/:id', (req, res) => {
    const id = req.params.id;
    EventModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        venue: req.body.venue,
        date: req.body.date
    })
        .then(events => res.json(events))
        .catch(err => res.json(err))
})

app.delete('/deleteEvent/:id', (req, res) => {
    const id = req.params.id;
    EventModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})


app.post("/createEvent", (req, res) => {
    EventModel.create(req.body)
        .then(events => res.json(events))
        .catch(err => res.json(err))

})

app.post("/Register", (req, res) => {
    RegiModel.create(req.body)
        .then(regi => res.json(regi))
        .catch(err => res.json(err))

})

app.post("/FeedBack", (req, res) => {
    FeedModel.create(req.body)
        .then(feedback => res.json(feedback))
        .catch(err => res.json(err))

})

// app.get('/getfeedback/:id', (req, res) => {
//     const id = req.params.id;
//     FeedModel.findById({ _id: id })
//         .then(feedback => res.json(feedback))
//         .catch(err => res.json(err))
// })

app.delete('/deletefeed/:id', (req, res) => {
    const id = req.params.id;
    FeedModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.get('/ViewFeedback', (req, res) => {
    FeedModel.find({})
        .then(feedback => res.json(feedback))
        .catch(err => res.json(err))
})

app.get('/ViewBooking', (req, res) => {
    RegiModel.find({})
        .then(regi => res.json(regi))
        .catch(err => res.json(err))
})


app.delete('/deleteregi/:id', (req, res) => {
    const id = req.params.id;
    RegiModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running Successfully")
})
