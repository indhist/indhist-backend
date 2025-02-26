const express = require('express');
const router = express.Router();
const states = require('./states/states.route');

//create routes here
router.use('/states', states);

module.exports = router;
