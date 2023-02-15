const Article = require('../../models/article')
const User = require('../../models/user')

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
    const article = await Article.findById(req.body.id)
    if (article) {
        article.users.push(req.user._id)
        await article.save()
        const user = await User.findById(req.user._id).populate("articles").exec()
        console.log(user)
    }
    console.log(req.user)
}

async function saved(req, res) {
    const savedArticles = await Article.find({ saved: true })
    res.json(savedArticles)
}

async function remove(req,res) {
    const article = await Article.findOne({ _id: req.params.id, saved: true })
    res.json(article)
}