const db = require('../lib/db.js');

function getAllSets(req, res, next) {
  db.many('SELECT * FROM sets')
    .then((data) => {
      res.sets = data;
      next();
    })
  .catch(error => console.log(error))
};

module.exports = {
  getAllSets
};
