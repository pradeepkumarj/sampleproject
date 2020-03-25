/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/products',require('./api/products'));
  app.use('/api/catogeries',require('./api/catogery'))
  

};
