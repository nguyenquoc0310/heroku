// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
var api = require('./server/routes/api');
const path = require('path');
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }

  app.use(forceSSL());

  app.use('/api', api);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

// Start the app by listening on the default
// Heroku port
var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log("Listening port : " + port);
  });