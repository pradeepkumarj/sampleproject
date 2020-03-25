'use strict';

var express = require('express');
var controller = require('./catogery.controller');

var router = express.Router();

router.get('/', controller.index);// To get all catogery list
router.post('/create', controller.create); //To add catogery in db
router.delete('/:id', controller.destroy); // To Remove the catogery and products that are associated with it.
module.exports = router;
