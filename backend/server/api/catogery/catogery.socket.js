/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Catogery = require('./catogery.model');

exports.register = function(socket) {
  Catogery.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Catogery.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('catogery:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('catogery:remove', doc);
}