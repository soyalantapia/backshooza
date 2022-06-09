const mongoose = require('mongoose');
const Shema = mongoose.Shema;

/* -------- ESTRUCTURA DE LA BASE DE DATOS -------- */
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    name: {type:String, required:true, unique:false},
    message: {type:String, required:true, unique:false},
<<<<<<< HEAD
    created: { type: Date, default: Date.now},
=======
>>>>>>> parent of 0f1a862 (Primer deploy)
});



module.exports = User = mongoose.model('users',UserSchema);