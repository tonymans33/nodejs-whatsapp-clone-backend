const express= require('express');
const messageController = require('../controllers/messageController');
require('express-group-routes');

var router = express.Router();


router.group( '/messages', (router) => {

    router.post( '/insert' , messageController.insertMessage);
    router.get( '/sync' , messageController.syncMessages);
});

// test route
router.get('/test', (req, res) => res.status(200).send("Test API is working!"));

module.exports = router;