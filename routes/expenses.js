var Router = require('express').Router;

module.exports = function expenses(expense) {

  var router = new Router()

  router.get('/', function(req, res, next) {
    expense.findAll(function(err, docs) {
      if (err) {
        return next(err);
      }
      res.json(docs);
    })
  })
  router.post('/', function(req, res, next) {
    var data = req.body;
    console.log(data);
    if (!data.name || !data.amount) {
      return res.sendStatus(400);
    }
    expense.create(data, function(err, doc) {
      if (err) {
        return next(err);
      }
      res.status(201).json(doc);
    })
  })
  return router;
};
