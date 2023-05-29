const mongoose = require("mongoose");
const {Schema} = mongoose
const anormalschema = new Schema({
  userId: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  locations: {
    type: [{
      longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      }
    }],
    required: true
  }
    
      
});
 const model = mongoose.model('anormalidad',anormalschema);
 module.exports = model;