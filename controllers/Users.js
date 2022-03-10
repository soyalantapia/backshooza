const mongoose = require('mongoose')
const User = require('../models/User')
const recaptcha = require('../controllers/recaptcha'); 
const request = require('request');
const { exists } = require('../models/User');


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

    //Si no se manda los datos desde el front lanza error de "algo esta saliendo mal"
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "Algo esta saliendo mal"});
  }
  const secretKey = "6Ld_1sYeAAAAAEGrma3jj5S6E4mKAPf5rnx098Rm";
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
            message: req.body.message
           // wallet: req.body.wallet
    
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
module.exports = {findAllUsers, findById, addUser}; 