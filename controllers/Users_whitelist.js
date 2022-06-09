 
const mongoose = require('mongoose');
const User = require('../models/User_whitelist');
const request = require('request');

  
const mongoose = require('mongoose')
const User = require('../models/User_whitelist')
     
  
const mongoose = require('mongoose')
const User = require('../models/User_whitelist')
    

//Variables de entorno
require('dotenv').config();


//Buscar todos los usuarios
const findAllUsers = (req, res) =>{
    User.find((err,users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    })
} 


 
  

//Buscar todos los usuarios
 const FuncionEleccionGanadores = (req, res) =>{
    for (let step = 0; step < 5; step++) {
    var myquery = { validation: 'true' };
    var newvalues = { $set: { validation: 'false' } };

        User.updateOne(myquery, newvalues, (err,users) => {
          console.log(err,users);    
        });
    };
}




//Traer a todos que estan en la whitelist 
const verificacionWhitelist = (req, res) =>{
    User.find({validation: 'true'},(err,users) => {
  
  
    
//Traer a todos que estan en la whitelist 
const verificacionWhitelist = (req, res) =>{
    User.find({validation: 'true'},(err,users) => {

   
     
  
    
        err && res.status(500).send(err.message);
        res.status(200).json(users);

    })
} 

//Verificar un adress si esta en la whitelist
const findById = (req,res) =>{
    User.findById(req.params.id,(err, user)=>{
        err && res.status(500).send(err.name);
        res.status(200).json(user);
    })
} 

//Seleccionar un Usuario
const verificacionAddress = (req,res) =>{
    User.findOne({wallet:req.params.wallet},(err, user)=>{
        err && res.status(500).send(err.name);
        res.status(200).json(user);
    })
} 

//Agregar un usuario
const addUser = (req,res) =>{
 
  

     
  

    
    //Si no se manda los datos desde el front lanza error de "algo esta saliendo mal"
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "Algo esta saliendo mal"});
  }
  const secretKey = process.env.SECRET_KEY_RECAPTCHA;
  
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);

    //Si la conexion funcia mal lanza el siguiente error
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Error Recaptcha, fracaso validacion"});
    }else{
    let respuesta = true
    if(respuesta === true ){ 
    
        let user = new User({ 
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            wallet: req.body.wallet,
            validation: req.body.validation
    
         })
         user.save((err,usr)=>{
             err && res.status(500).send(err.message);
             res.status(200).json({"responseSuccess" : "recaptcha exito", usr});
         })
        };
         
    } //Cierre del if
});

};



//Exportando funciones
 
module.exports = {findAllUsers,FuncionEleccionGanadores, verificacionWhitelist, verificacionAddress, findById, addUser}; 
