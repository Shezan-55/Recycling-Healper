const mongoose = require('mongoose');

// Define the schema for recycleData collection
const pracSchema = new mongoose.Schema({
        name:{type: String}
});

// Create the Mongoose model for recycleData
const prac = mongoose.model('prac', pracSchema); 

module.exports = prac;
 