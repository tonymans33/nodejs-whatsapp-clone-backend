const app= require('express');

require('express-group-routes');

const AuthMiddleware = require('../middleware/authMiddleware');
const chatController = require('../controllers/chatController');



var router = app.Router();

router.route('/')
    .get(AuthMiddleware, chatController.getAllChats)
    .post(AuthMiddleware, chatController.insertOneChat)

module.exports = router;