const express = require('express');
const app = express();
const indexRoute = require('./components/indexRoute');


app.use('/api/v1', indexRoute);

module.exports = app;
