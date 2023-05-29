const mongoose = require("mongoose");
const {Schema} = mongoose
const schema = new Schema({
    userId:{ type:String,required: true },
    number: {
        type: String,
        // unique: false,
        required: true,
      },
      nameContact: {
        type: String,
        default: "Unknow",
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      typeRaw: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      }
      
});
 const model = mongoose.model('HistorialDeLlamadas',schema);
 module.exports = model;