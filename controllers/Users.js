const mongoose = require('mongoose')
const User = require('../models/User')
const recaptcha = require('../controllers/recaptcha'); 
const request = require('request');
const { exists } = require('../models/User');


//Variables de entorno
require('dotenv').config();

/* -------- BUSCA TODOS LOS USUARIOS -------- */
const findAllUsers = (req, res) =>{
    User.find((err,users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    })
} 

/* -------- SELECCIONAR UN USUARIO-------- */
const findById = (req,res) =>{
    User.findById(req.params.id,(err, user)=>{
        err && res.status(500).send(err.name);

        res.status(200).json(user);
    })
} 


/* --------- AGREGAR UN USUARIO -------- */
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

    //Si la conexion funciona mal lanza el siguiente error
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Error Recaptcha, fracaso validacion"});
    }else{
    let respuesta = true
    if(respuesta === true ){ 
    
        let user = new User({ 
            email: req.body.email,
            name: req.body.name,
            message: req.body.message
          })
         user.save((err,usr)=>{
             err && res.status(500).send(err.message);
             res.status(200).json({"responseSuccess" : "recaptcha exito", usr});
         })      
         };

         
    } //Cierre del if

    /* -------- AGREGAR UN USUARIO -> CONEXION CON MAILERLITE -------- */
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://api.mailerlite.com/api/v2/subscribers',
      'headers': {
        'X-MailerLite-ApiKey': '3df4346d696c3ef5510ab772f2ebb85f',
        'Content-Type': 'application/json',
        'Cookie': 'PHPSESSID=3ba7202d14ff5c93df070cfddde703d9'
      },

      body: JSON.stringify({
        "email": req.body.email,
        "resubscribe": false,
        "type": "active",
        "name": req.body.name
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    //Fin de conexion con mailerlite
    
});

};

/* -------- EXPORTANDO FUNCIONES -------- */
module.exports = {findAllUsers, findById, addUser}; 
