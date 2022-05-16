const mongoose = require('mongoose');
const Shema = mongoose.Shema;

/* -------- ESTRUCTURA DE LA BASE DE DATOS -------- */
const UserSchema = new mongoose.Schema({
    email: {type:String,  required:true, unique:true},
    password: {type:String, required:true, unique:false},
   
});


UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = User = mongoose.model('userNew',UserSchema);