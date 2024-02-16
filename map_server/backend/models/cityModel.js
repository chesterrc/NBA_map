const mongoose = require('mongoose');

//schema used to pull data from Cities
const CitySchema = mongoose.Schema(
    {
        City:{
            type: String,
            required: [true, 'Please select a city']
        },
        State:{
            type: String,
            required: true,
        },
        Latitude:{
            type: Float64Array,
            required: true,
        },
        Longitude:{
            type: Float64Array,
            required: true,
        }
        
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('cities', CitySchema);