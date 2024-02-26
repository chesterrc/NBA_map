const mongoose = require('mongoose');

//schema used to pull data from Cities
const CitySchema = mongoose.Schema({
    City: {
        type: String,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    latitude:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('City', CitySchema, 'USCities');