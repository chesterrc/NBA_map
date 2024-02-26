const dotenv = require('dotenv');
dotenv.config({path: 'map_server\.env'});

const express = require('express');
const mapRoutes = require('./Routes/mapRoutes');
const app = express()

//CORS authorization
const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//connection to database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected")
        //start listening for requests
        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`)
        });
    })
    .catch(error => {console.log(error)})

//middleware
app.use(express.json());        //checks if req is in .json format

//middleware for type of request
//mainly used for debugging
app.use((req, res, next) => {
    next()
});

app.use('/map', mapRoutes);



