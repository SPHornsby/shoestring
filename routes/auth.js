var auth = function (req, res, next) {
  req.body.nameID = 'Sean';
  next();
}

module.exports = auth;
