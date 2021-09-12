const express= require('express');
const messageController = require('../controllers/messageController');
require('express-group-routes');

var router = express.Router();

router.post( '/' , messageController.insertOneMessage);
router.get( '/' , messageController.getAllMessages);

module.exports = router;