const mongoose = require('mongoose');
const Shema = mongoose.Shema;

//Creando el modulo de la base de datos
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    name: {type:String, required:true, unique:true},
    phone: {type:Number, required:true, unique:true},
    wallet: {type:String, required:true, unique:true},
});


module.exports = User_whitelist = mongoose.model('whitelist',UserSchema);