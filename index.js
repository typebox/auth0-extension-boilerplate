var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var app      = express();
var metadata = require('./webtask.json');

app.get('/login', function (req, res) {
  console.log(req.query.returnTo);
  next();
});


module.exports = app;
