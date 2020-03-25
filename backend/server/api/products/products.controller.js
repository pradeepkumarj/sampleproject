'use strict';

var _ = require('lodash');
var Products = require('./products.model');

// Get list of proucts from the db
exports.index = function (req, res) {
  Products.find({category:req.params.id}).populate('category').exec(function (err, products) {
    if (err) { return handleError(res, err);}
    else res.status(200).json(products);
  });
};


// Creates a new products in the DB (pass in req.body that matches the field name in model.js)
exports.create = function (req, res) {
  Products.create(req.body, function (err, products) {
    if (err) { console.log(err);return handleError(res, err);}
    return res.status(201).json(products);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
