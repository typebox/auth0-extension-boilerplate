var express  = require('express');
var auth0    = require('auth0-oauth2-express');
var Webtask  = require('webtask-tools');
var app      = express();
var metadata = require('./webtask.json');


app.use((req, res, next) => {
  console.log(req;
  next();
});


module.exports = app;
