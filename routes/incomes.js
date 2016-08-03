var incomes = require('express').Router();

incomes.get('/', function(req, res) {
  res.send('ok');
});

module.exports = incomes;
