var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(8000, () => console.log("8000"));
