'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CatogerySchema = new Schema({
  name: String,
  info: String,
  created_at: { type: Date,default: Date.now},
});

module.exports = mongoose.model('Catogery', CatogerySchema);
