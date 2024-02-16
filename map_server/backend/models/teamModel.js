const mongoose = require('mongoose');

//schema used to pull data from nba teams
const TeamSchema = mongoose.Schema(
    {
        City:{
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
    }
)

module.exports = mongoose.model('Team', TeamSchema);