require('dotenv').config()
require('./config/database')

// Require the Mongoose models
const User = require('./models/user')
const Article = require('./models/article')

// Local vaiables will come in hand for holding retrieved documents
let user, article
let users, articles