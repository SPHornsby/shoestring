module.exports = function budgetsData(db) {
  var collection = db.collection('ssbudgets');

  return {findByWeek, create, findAll, addIncome, addExpense, findByUser, removeIncome, removeExpense};

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

  function findByUser(name, callback) {
    collection.find({name: name}).toArray(callback);
  }

  function findByWeek(week, callback) {
    collection.find(week).toArray(callback);
  }

  function addIncome(data, callback) {
    collection.updateOne({name: data.name, week: data.week}, {$push: {incomes:data.input}}, function(err, result) {
      callback();
    });
  }

  function addExpense(data, callback) {
    collection.updateOne({name: data.name, week: data.week}, {$push: {expenses:data.input}}, function(err, result) {
      callback();
    });
  }
  function removeIncome(data, callback) {
    collection.update({name: data.name, week: data.week}, {$pull: {incomes: {time: data.time}}}, function(err, result) {
      callback();
    })
  }
  function removeExpense(data, callback) {
    collection.update({name: data.name, week: data.week}, {$pull: {expenses: {time: data.time}}}, function(err, result) {
      callback();
    })
  }
};
