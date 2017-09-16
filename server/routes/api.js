var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../modules/book.js');

var router = express.Router();

var db = 'mongodb://quocn:1234@ds135384.mlab.com:35384/book';
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true}, function (err, res) {
  if (err) {
    console.log('Failed to connected to ' + db);
  } else {
    console.log('Connected to ' + db);
  }
});

// Get All Books
router.get('/books', function (req, res) {
  Book.find({})
    .exec(function (err, books) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(books);
      }
    });
});

module.exports = router;
