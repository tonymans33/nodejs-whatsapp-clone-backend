const app= require('express');
require('express-group-routes');


const messageController = require('../controllers/messageController');
const AuthMiddleware = require('../middleware/authMiddleware');

var router = app.Router();

router.route('/')
    .get(AuthMiddleware, messageController.getAllMessages)
    .post(AuthMiddleware, messageController.insertOneMessage)

module.exports = router;