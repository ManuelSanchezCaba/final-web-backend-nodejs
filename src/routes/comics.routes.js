const express = require('express');
const router = express.Router();

const { getAllComic, getComicByName } = require('../controllers/comics.controllers');

router.get('/', getAllComic);

router.post('/', getComicByName);

module.exports = router;
