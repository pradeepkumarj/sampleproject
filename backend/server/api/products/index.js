'use strict';

var express = require('express');
var controller = require('./products.controller');

var router = express.Router();

router.get('/:id', controller.index); // to get the products list
router.post('/add', controller.create); // to add the products


module.exports = router;