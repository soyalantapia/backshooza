const mongoose = require('mongoose');
const Shema = mongoose.Shema;

//Creando el modulo de la base de datos
const UserSchema = new mongoose.Schema({
    email: {type:String},
    username: {type:String, required:true, unique:true},
    motivation: {type:String, required:true, unique:true},
    //wallet: {type:String},
});


module.exports = User = mongoose.model('User',UserSchema);