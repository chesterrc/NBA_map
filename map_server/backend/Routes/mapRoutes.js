const express = require('express');
const{
    getCities,
    getNBATeams,
    getNBATeam,
} = require('../controllers/controller')
const router = express.Router();


//CRUD functionality

//NBA Team GET requests
router.get('/', getNBATeams)

router.get('/:id', getNBATeam);

//City get requests
router.get('/Cities', getCities);

module.exports = router