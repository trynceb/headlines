const Article = require('../../models/article')
const SavedArticle = require('../../models/savedArticle')

module.exports = {
    index,
    show,
    save,
    saved,
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
    const article = await Article.findOne({ articleId: req.params.id })
    const savedArticle = new SavedArticle.save()
    res.json(savedArticle)
    res.redirect('/headlines')
}

async function saved(req, res) {
    const savedArticles = await Article.find({ saved: true})
    res.json(savedArticles)
}

async function remove(req,res) {
    const article = await Article.findOne({ _id: req.params.id, saved: true })
        res.redirect("/pour-over/recipes")
}