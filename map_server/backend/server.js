const express = require('express');
const port = 5000;
const connectDB = require('../database/mongoData');
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

app.use('/get', require('./Routes'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

