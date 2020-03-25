'use strict';

var _ = require('lodash');
var Catogery = require('./catogery.model');
var Products = require('../products/products.model')

// Get list of categories from db (returns all list)
exports.index = function (req, res) {
  Catogery.find({},function (err, catogerys) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(catogerys);
  });
};

// Creates a new catogery in the DB. (pass in req.body that matches the field name in model.js)
exports.create = function (req, res) {
  Catogery.create(req.body, function (err, catogery) {
    if (err) { return handleError(res, err);}
    return res.status(201).json(catogery);
  });
};


// Deletes a catogery from the DB and the products associated with it.
exports.destroy = function (req, res) {
  Catogery.findById(req.params.id, function (err, catogery) {
    if (err) { return handleError(res, err);}
    if (!catogery) { res.status(404).send('Not Found');}
    else {
      catogery.remove(function (err) {
        if (err) { handleError(res, err);}
        else if(!catogery){ res.status(404).send('No Content') }
        else {
          Products.find({category:req.params.id},function(err,products){
            if(err) { return handleError(res, err);}
            else if(!products) res.status(404).send('No Prodcuts available')
            Products.remove({category:req.params.id},function(err){
              if(err) { return handleError(res, err);}
              else  { res.status(200).json(products)}
            })
          })     
        }
      });
    }
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
