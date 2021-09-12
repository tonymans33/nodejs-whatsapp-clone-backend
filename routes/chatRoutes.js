const express= require('express');
const chatController = require('../controllers/chatController');
require('express-group-routes');

var router = express.Router();

router.post( '/' , chatController.insertOneChat);
router.get( '/' , chatController.getAllChats);

// test route
router.get('/test', (req, res) => res.status(200).send("Test API is working!"));

module.exports = router;