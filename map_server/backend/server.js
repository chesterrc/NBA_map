const dotenv = require('dotenv');
dotenv.config({path:__dirname+'/.env'});

const express = require('express');
const mapRoutes = require('./Routes/mapRoutes')

//express app
const app = express();

//connetion to database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected")
        //start listening for requests
        app.listen(process.env.POST, () => {
            console.log('listening on port', process.env.PORT)
        });
    })
    .catch(error => {console.log(error)})
    
//middleware
app.use(express.json());        //checks if req is in .json format

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use('/map', mapRoutes);

