const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    articleId: {
        type: String,
        required: true
    },
    source: {
        domain: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String
    },
    pubDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    keywords: [],
    topics: [],
    categories: [],
    companies: [],
    summary: {
        type: String,
        required: false
    },
    locations: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)
