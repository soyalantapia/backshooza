
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Shema = mongoose.Shema;
const { Schema } = mongoose;



 /* -------- ESTRUCTURA DE LA BASE DE DATOS -------- */
const userSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String,  required:true},
    password: {type:String,  required:true},
    rol: {type:String},
    phone: {type:Number},
    partiesTypeOfPartyUser: {type:String},
    drinkTypeOfPartyUser: {type: String},
    created: { type: Date, default: Date.now},
});


userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
  userSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  

module.exports = mongoose.model('usernew', userSchema);

