var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var incomes = require('./routes/incomes.js');

var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';

MongoClient.connect(url, function(err, db) {

  if(err) {
    console.error(err);
    process.exit(1);
  }

  express()
    .use('/incomes', incomes)
    .use(express.static('app'))
    .listen(8000);
})
