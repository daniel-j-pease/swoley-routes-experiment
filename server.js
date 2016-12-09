'use strict'
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

const setsRouter = require('./routes/sets');
app.use('/sets', setsRouter);

app.listen(PORT, () => {console.log('Free hugs at port', PORT)});
