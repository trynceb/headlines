const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles')

router.get('/', articlesCtrl.index)
router.get('/:id', articlesCtrl.show)
router.post('/saved', articlesCtrl.save)
router.get('/saved', articlesCtrl.saved)
router.delete('/saved/:id', articlesCtrl.remove)

module.exports = router