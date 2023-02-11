const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles')

router.get('/', articlesCtrl.index)
router.get('/:id', articlesCtrl.show)
