var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('book', BookSchema, 'books');
