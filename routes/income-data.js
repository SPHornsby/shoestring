

module.exports = function incomeData(db) {
  var collection = db.collection('incomes');

  return {findAll};

  function findAll(callback) {
    collection.find({}).toArray(callback);
  }
};
