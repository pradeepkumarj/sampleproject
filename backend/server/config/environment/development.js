'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb+srv://pradeep:pradeep@cluster0-fxnzr.mongodb.net/test?retryWrites=true&w=majority',
    options: {useNewUrlParser: true}
  },

  seedDB: true
};
