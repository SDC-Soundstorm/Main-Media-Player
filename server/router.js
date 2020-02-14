const router = require('express').Router();
const controller = require('../db/controller.js');

//route all get requests from song endpoint
router.get('/song', controller.song.getLegacy);
router.get('/song/:id', controller.song.get);
router.post('/song', controller.song.post)
router.put('/song/:id', controller.song.put)
router.delete('/song/:id', controller.song.delete)

module.exports = router;