var Router = require('express').Router;

module.exports = function users(user) {

  var router = new Router()

  router.get('/user', function(req, res, next) {
    var name = 'Sean';
    user.findByName(name, function(err, doc) {
      if (err) {
        return next(err);
      }
      if (!doc) {
        return res.sendStatus(400);
      }
      res.json(doc);
    })
  })
  router.get('/', function(req, res, next) {
    user.findAll(function(err, docs) {
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
  router.put('/', function(req, res, next) {
    var data = req.body;
    console.log(data);
    res.send(data);
  })
  return router;
};
