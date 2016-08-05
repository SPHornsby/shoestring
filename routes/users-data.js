module.exports = function usersData(db) {
  var collection = db.collection('ssusers');

  return {findByName, create, findAll, addIncome};

  function create(user, callback) {
    collection.insert(user, function(err, result) {
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

  function findByName(name, callback) {
    collection.findOne({name: name}, callback);
  }

  function addIncome(data, callback) {
    collection.updateOne({}, {})
  }
};
