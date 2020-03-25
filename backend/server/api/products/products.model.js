'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductsSchema = new Schema({
  productname: String,
  info: String,
  price: Number,
  category: { type: Schema.ObjectId,ref: 'Catogery'},
  created_at: { type: Date,default: Date.now},
});

module.exports = mongoose.model('Products', ProductsSchema)
