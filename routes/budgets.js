var Router = require('express').Router;

module.exports = function budgets(budget) {

  var router = new Router()

  router.get('/budget/', function(req, res, next) {
    var name = req.body.nameID;
    budget.findByUser(name, function(err, doc) {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(400);
      }
      res.json(doc);
    })
  })
  router.get('/week/:weekID', function(req, res, next) {
    var data = {week: parseInt(req.params.weekID), name: req.body.nameID};
    budget.findByWeek(data, function(err, doc) {
      if (err) {
        return next(err);
      }
      res.json(doc);
    })
  })
  router.get('/', function(req, res, next) {
    budget.findAll(function(err, docs) {
      if (err) {
        return next(err);
      }
      res.json(docs);
    })
  })
  router.post('/', function(req, res, next) {
    var data = req.body;
    console.log(data);
    res.send(data);
  })
  router.put('/week/:weekID', function(req, res, next) {
    var data = req.body;
    budget.addIncome(data, function(err, doc) {
      res.send()
    })
  })
  return router;
};
