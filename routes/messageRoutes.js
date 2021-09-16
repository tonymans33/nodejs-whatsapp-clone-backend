const express= require('express');
const messageController = require('../controllers/messageController');
const protect = require('../middleware/authMiddleware');
require('express-group-routes');

var router = express.Router();

router.route('/')
    .get(protect, messageController.getAllMessages)
    .post(protect, messageController.insertOneMessage)

module.exports = router;