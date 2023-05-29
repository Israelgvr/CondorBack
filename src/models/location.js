const mongoose = require("mongoose");
const {Schema} = mongoose
const schema = new Schema({
    userId:{ type:String },
    longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    
      
});
 const model = mongoose.model('locations',schema);
 module.exports = model;