const Article = require('../../models/article')

module.exports = {
    index,
    show,
    save,
    remove
}

async function index(req, res) {
    const articles = await Article.find({})
    res.json(articles)
}

async function show(req, res) {
    const article = await Article.findOne({articleId:req.params.id})
    res.json(article)
}

async function save(req, res) {
    const article = await Article.findById(req.body.id)
    if (article) {
        if (!article.users.includes(req.user._id)) {
            article.users.push(req.user._id)
            await article.save()
            const savedArticles = await Article.find({ users: req.user._id })
            res.json(savedArticles)
        }
    }
}

async function remove(req, res) {
    const article = await Article.findById(req.body.id)
    if (article) {
        if (article.users.includes(req.user._id)) {
            article.users.pop(req.user._id)
            await article.save()
            const savedArticles = await Article.find({ users: req.user._id })
            res.json(savedArticles)
        }
    }
}