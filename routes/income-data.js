

module.exports = function incomeData(db) {
  var collection = db.collection('incomes');

  return {create, findAll};

  function create(income, callback) {
    collection.insert(income, function(err, result) {
      if (err) {
        return callback(err);
      }
      var created = result.ops[0];
      callback(null, created);
    });
  }

  function findAll(callback) {
    collection.find({}).toArray(callback);
  }
};
