const mongoose = require('mongoose');
const Shema = mongoose.Shema;

 /* -------- ESTRUCTURA DE LA BASE DE DATOS -------- */
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    name: {type:String, required:true, unique:true},
    phone: {type:Number, required:true, unique:true},
    wallet: {type:String, required:true, unique:true},
    validation: {type: Boolean, default: false},
 
    created: { type: Date, default: Date.now},
  

     
  

    
});


module.exports = User_whitelist = mongoose.model('whitelist',UserSchema);