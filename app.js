var express = require('express');
var app = express();
var incomes = require('./routes/incomes.js');

app.use('/incomes', incomes);
app.use(express.static('app'));

app.listen(8000, () => console.log("8000"));
