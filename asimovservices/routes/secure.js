var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users.controller');

router.get('/users', usersController.findAll);

router.get('/users/:id', usersController.findById);

router.post('/users', usersController.create);

router.put('/users/:id', usersController.update);

module.exports = router;
