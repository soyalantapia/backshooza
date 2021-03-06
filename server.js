const path = require('path');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');



const app = express();


 /* -------- MIDDLEWARE-------- */
 app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

 /* -------- PROTOCOLO DE SEGURIDAD -------- */
 const cors = require('cors');
 app.use(cors());


/*
var whitelist = ['http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/


/* -------- PROTOCOLO DE SEGURIDAD  -> EXPORTANDO FUNCIONES -------- 
module.exports = {corsOptions}; */


 /* -------- VARIABLE DE ENTORNO -------- */
 require('dotenv').config();



 /* -------- DECLARACION DE APIS -------- */
const Users = require('./api/users');
const Users_whitelist = require('./api/users_whitelist');
const autenticar = require('./api/autenticar');


 /* -------- NOMBRES DE APIS  -------- */
 app.use("/api/whitelist", Users_whitelist);
 app.use("/api/newsletter", Users);
 app.use("/api", autenticar);
 




 /* -------- DATABASE CONNECT -------- */
const mongo_uri = process.env.MONGODB_URI;
mongoose.connect(mongo_uri, function(err){
    if (err){
        throw err;
    }else{
        console.log('Conexion exitosa a la bd')
    }
})

 /* -------- MOSTRAR PAGINA ESTATICA  -------- */
 app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


 /* -------- LEVANTANDO SERVIDOR -------- */
const port = process.env.PORT;
app.listen(port, () => console.log(`Abierto el puerto ${port}!`))

module.exports = app;


