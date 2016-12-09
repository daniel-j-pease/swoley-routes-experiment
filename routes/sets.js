const setsRouter = require('express').Router();

setsRouter.route('/')
  .get((req, res) => res.json(res.sets));

module.exports = setsRouter;
