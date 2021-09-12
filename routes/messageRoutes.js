const express= require('express');
const messageController = require('../controllers/messageController');
require('express-group-routes');

var router = express.Router();

router.post( '/' , messageController.insertOneMessage);
router.get( '/' , messageController.getAllMessages);

// test route
router.get('/test', (req, res) => res.status(200).send("Test API is working!"));

module.exports = router;