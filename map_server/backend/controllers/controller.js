const asyncHandler = require('express-async-handler');

const City = require('../models/cityModel');
const Team = require('../models/teamModel');
const { default: mongoose } = require('mongoose');

//get coords for a city
const getCities = asyncHandler( async (req, res) => {
    //single team id
    const{ City } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such city"})
    }

    //checking request text
    const cityCoords = await Team.findbyID(id);

    if(!cityCoords) {
        return res.status(404).json({error: "No such city"})
    }

    res.status(200).json(cityCoords);
});
    

//get coords for NBA team
const getNBATeams = asyncHandler( async (req, res) => {
    //grab all team coords
    const teamCoords = await Team.find({});
    
    res.status(200).json(teamCoords);
});

//specific team
const getNBATeam = asyncHandler( async (req, res) => {
    //single team id
    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such cityt"})
    }

    //checking request text
    const teamCoords = await Team.findbyID(id);

    if(!teamCoords) {
        return res.status(404).json({error: "No such cityt"})
    }

    res.status(200).json(teamCoords);
});

module.exports = {
    getCities,
    getNBATeams,
    getNBATeam
}