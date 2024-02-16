const express = require('express');
const router = express.Router();
const {getMap} = require('./controllers/controller');

router.route('/').get(getMap)

module.exports = router;