var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var incomeData = require('./routes/income-data.js')
var incomes = require('./routes/incomes.js');
var expensesData = require('./routes/expenses-data.js')
var expenses = require('./routes/expenses.js');

var user = process.env.MDB;
var pw = process.env.MDBPW;
var url = 'mongodb://' + user + ':' + pw + '@ds029745.mlab.com:29745/heroku_8xrhcd53';

MongoClient.connect(url, function(err, db) {

  if(err) {
    console.error(err);
    process.exit(1);
  }

  var income = incomeData(db);
  var expense = expensesData(db);
  express()
    .use(bodyParser.json())
    .use('/incomes', incomes(income))
    .use('/expenses', expenses(expense))
    .use(express.static('app'))
    .listen(8000);
})
