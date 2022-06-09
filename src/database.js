const mongoose = require('mongoose');

 /* -------- VARIABLE DE ENTORNO -------- */
 require('dotenv').config();

/* -------- DATABASE CONNECT -------- */
 const mongo_uri = process.env.MONGODB_URI;
 mongoose.connect(mongo_uri, function(err){
     if (err){
         throw err;
     }else{
         console.log('Conexion exitosa a la bd')
     }
 })
 