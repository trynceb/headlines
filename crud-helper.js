require('dotenv').config()
require('./config/database')

const User = require('./models/user')
const Article = require('./models/article')

let user, article
let users, articles