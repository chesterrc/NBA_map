const asyncHandler = require('express-async-handler');

const City = require('../models/cityModel');
const Team = require('../models/teamModel');
const { default: mongoose } = require('mongoose');

//get coords for a city
const getCity = asyncHandler( async (req, res) => {
    //single city id
    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }

    //checking request text
    const cityCoords = await City.findbyID(id);
    res.send(cityCoords);
    if(!cityCoords){
        return res.status(404).json({error: "no such workout"})
    }
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
        return res.status(404).json({error: "no such workout"})
    }

    //checking request text
    const teamCoords = await Team.findbyID(id);

    if(!teamCoords) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
});

module.exports = {
    getCity,
    getNBATeams,
    getNBATeam
}