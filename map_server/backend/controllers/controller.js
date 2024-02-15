const asyncHandler = require('express-async-handler');

const getMap = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Get map coords ${req.params.id}`})
    res.send('Get requests sent')
});
module.exports = {
    getMap
}