const express= require('express');
const chatController = require('../controllers/chatController');
require('express-group-routes');
const protect = require('../middleware/authMiddleware');


var router = express.Router();

router.route('/')
    .get(protect, chatController.getAllChats)
    .post(protect, chatController.insertOneChat)

module.exports = router;