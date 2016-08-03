var Router = require('express').Router;

module.exports = function incomes(income) {

  var router = new Router()

  router.get('/', function(req, res, next) {
    income.findAll(function(err, docs) {
      if (err) {
        return next(err);
      }
      res.json(docs);
    })
  })
  router.post('/', function(req, res, next) {
    var data = req.body;
    if (!data.name || !data.amount) {
      return res.sendStatus(400);
    }
    income.create(data, function(err, doc) {
      if (err) {
        return next(err);
      }
      res.status(201).json(doc);
    })
  })
  return router;
};
