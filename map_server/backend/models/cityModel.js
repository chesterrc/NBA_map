const mongoose = require('mongoose');

//schema used to pull data from Cities
const CitySchema = mongoose.Schema({});

module.exports = mongoose.model('Cities', CitySchema, 'USCities');