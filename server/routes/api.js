var express = require('express');
var router = express.Router();

// Get All Books
router.get('/books', function (req, res) {
  res.send("heroku");
});

module.exports = router;
