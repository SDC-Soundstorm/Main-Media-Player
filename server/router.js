const router = require('express').Router();
const controller = require('../db/controller.js');

//route all get requests from song endpoint
router.get('/song', controller.song.getLegacy);

module.exports = router;