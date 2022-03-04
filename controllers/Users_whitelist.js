const mongoose = require('mongoose')
const User = require('../models/User_whitelist')

//Buscar todos los usuarios
const findAllUsers = (req, res) =>{
    User.find((err,users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    })
} 

//Seleccionar un Usuario
const findById = (req,res) =>{
    User.findById(req.params.id,(err, user)=>{
        err && res.status(500).send(err.name);

        res.status(200).json(user);
    })
} 


//Agregar un usuario
const addUser = (req,res) =>{
    let user = new User({ 
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        wallet: req.body.wallet

     })
     user.save((err,usr)=>{
         err && res.status(500).send(err.message);
         
         res.status(200).json(usr);

     })
};


//Exportando funciones
module.exports = {findAllUsers, findById, addUser}; 