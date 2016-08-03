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

  return router;
};
