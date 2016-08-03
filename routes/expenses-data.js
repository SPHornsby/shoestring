

module.exports = function incomeData(db) {
  var collection = db.collection('expenses');

  return {create, findAll};

  function create(expense, callback) {
    collection.insert(expense, function(err, result) {
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
