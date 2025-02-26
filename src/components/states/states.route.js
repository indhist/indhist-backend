const express = require('express');
const router = express.Router();
const { SERVER_START_MESSAGE } = require('../../constants/constants');
const statesController = require('./states.controller');

// use validation to validate schema of the body data

router.route('/').get(statesController.getStates);

module.exports = router;
