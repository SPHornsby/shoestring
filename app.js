var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var usersData = require('./routes/users-data.js');
var users = require('./routes/users.js');
var budgetsData = require('./routes/budgets-data.js');
var budgets = require('./routes/budgets.js');
var auth = require('./routes/auth.js');

var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';

MongoClient.connect(url, function(err, db) {

  if(err) {
    console.error(err);
    process.exit(1);
  }

  var user = usersData(db);
  var budget = budgetsData(db);
  express()
    .use(bodyParser.json())
    .use(auth)
    .use('/users', users(user))
    .use('/budgets', budgets(budget))
    .use(express.static('app'))
    .listen(8000);
})
