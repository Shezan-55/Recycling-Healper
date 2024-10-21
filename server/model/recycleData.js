const mongoose = require('mongoose');

// Define the schema for recycleData collection
const recycleDataSchema = new mongoose.Schema({
    wasteType: String,
    materialComposition: String,
    recyclingMethod: [String],
    disposalCategory: String,
    environmentalImpact: {
        carbonFootprint: Number,
        decompositionTime: Number
    },
    recycleCode: String,
    reusePossibility: Boolean,
    recycleByProducts: [String],
    disposalInstructions: [String],
    toxicityLevel: String,
    economicValue: Number
});

// Create the Mongoose model for recycleData
const RecycleData = mongoose.model('recycleData', recycleDataSchema);

module.exports = RecycleData;
