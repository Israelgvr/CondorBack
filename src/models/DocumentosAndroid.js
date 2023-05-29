const mongoose = require("mongoose");
const {Schema} = mongoose
const schema = new Schema({
    userId:{ type:String,required: true},
    name:{ type: String },
    date: { type: String},
    time: { type: String}
      
});
 const model = mongoose.model('Documentos',schema);
 module.exports = model;