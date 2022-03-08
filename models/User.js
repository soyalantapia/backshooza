const mongoose = require('mongoose');
const Shema = mongoose.Shema;

//Creando el modulo de la base de datos
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    name: {type:String, required:true, unique:true},
    message: {type:String, required:true, unique:true},
});



module.exports = User = mongoose.model('users',UserSchema);