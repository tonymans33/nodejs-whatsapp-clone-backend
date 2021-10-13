const express= require('express');
const authController = require("../controllers/authController")

var router = express.Router();

router.post("/signUp", authController.signUp)
router.post("/login", authController.login)

module.exports = router;