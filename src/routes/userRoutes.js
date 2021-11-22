const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('./../controllers/authController');

router.post('/login',authController.login);
router.post('/signup', authController.signup);

router.get('/',userController.getAllUsers);
router.post('/',userController.setUser)
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

module.exports = router;