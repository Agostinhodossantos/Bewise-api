const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('./../controllers/authController');


router.post('/login', authController.login);
router.post('/signup', authController.signup);

router.get('/users', userController.getAllUsers);
router.get('/', (req, res) => {
    res.send({name: "hello world"})
})
module.exports = router;