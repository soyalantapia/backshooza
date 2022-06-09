const mongoose = require('mongoose');
const Shema = mongoose.Shema;

 /* -------- ESTRUCTURA DE LA BASE DE DATOS -------- */
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    name: {type:String, required:true, unique:true},
    phone: {type:Number, required:true, unique:true},
    wallet: {type:String, required:true, unique:true},
    validation: {type: Boolean, default: false},
<<<<<<< HEAD
    created: { type: Date, default: Date.now},
=======

>>>>>>> parent of 0f1a862 (Primer deploy)
});


module.exports = User_whitelist = mongoose.model('whitelist',UserSchema);