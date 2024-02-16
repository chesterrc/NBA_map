const express = require('express');
const{
    getCity,
    getNBATeams,
    getNBATeam
} = require('../controllers/controller')
const router = express.Router();


//CRUD functionality

//NBA Team GET requests
router.get('/allTeams', getNBATeams)

router.get('/Team/:id', getNBATeam);

//City get requests
router.get('/City/:id', getCity);

module.exports = router