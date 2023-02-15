const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savedArticlesSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
})

module.exports = mongoose.model('Saved', savedArticlesSchema)