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
      }
     
      
});
 const model = mongoose.model('Contactos',schema);
 module.exports = model;