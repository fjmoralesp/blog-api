const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.find);

router.post('/', usersController.create);

module.exports = router;
