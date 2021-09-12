const express= require('express');
const chatController = require('../controllers/chatController');
require('express-group-routes');

var router = express.Router();


router.post( '/' , chatController.insertOneChat);
router.get( '/' , chatController.getAllChats);

module.exports = router;