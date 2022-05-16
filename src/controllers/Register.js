const mongoose = require('mongoose');
const User = require('../models/Register');
const request = require('request');

//Variables de entorno
require('dotenv').config();


//Agregar un usuario
const addUser = (req,res) =>{

    console.log(req.body);
    res.send("recibido")
//     //Si no se manda los datos desde el front lanza error de "algo esta saliendo mal"
//   if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
//   {
//     return res.json({"responseError" : "Algo esta saliendo mal"});
//   }
//   const secretKey = process.env.SECRET_KEY_RECAPTCHA;
  
//   const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
//   request(verificationURL,function(error,response,body) {
//     body = JSON.parse(body);

//     //Si la conexion funcia mal lanza el siguiente error
//     if(body.success !== undefined && !body.success) {
//       return res.json({"responseError" : "Error Recaptcha, fracaso validacion"});
//     }else{
//     let respuesta = true
//     if(respuesta === true ){ 
    
//         let user = new User({ 
//             email: req.body.email,
//             name: req.body.name,
//             phone: req.body.phone,
//             wallet: req.body.wallet,
//             validation: req.body.validation
    
//          })
//          user.save((err,usr)=>{
//              err && res.status(500).send(err.message);
//              res.status(200).json({"responseSuccess" : "recaptcha exito", usr});
//          })
//         };
         
//     } //Cierre del if
// });



};



//Exportando funciones
module.exports = {addUser}; 

