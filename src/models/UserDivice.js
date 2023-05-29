const mongoose = require("mongoose");
const {Schema} = mongoose
const schema = new Schema({
    userId:{ type:String },
    fabricate:{ type:String,require:true },
    modelo:{type:String,require:true},
    version:{ type:String, require:true},
    locations:[{type:Schema.Types.ObjectId,refs:'locations'}],  
    imagens:[{type:Schema.Types.ObjectId,refs:'imagens'}],
    videos: [{type:Schema.Types.ObjectId,refs:'videos'}] 
});
 const model = mongoose.model('userDivice',schema);
 module.exports = model;