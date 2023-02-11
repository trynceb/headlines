const Article = require('../../models/article')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const articles = await Article.find({})
    res.json(articles)
}

async function show(req, res) {
    const article = await Article.findById(req.params.id)
    res.json(article)
}