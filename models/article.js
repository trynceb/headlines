const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    body: {
        type: Text,
        required: true
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('Article', articleSchema)