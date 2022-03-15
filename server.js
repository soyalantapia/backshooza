const path = require('path');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//Declaracion de APIS
const Users = require('./api/users');
const Users_whitelist = require('./api/users_whitelist');
const recaptcha = require('./api/recaptcha');

//Variables de entorno
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//activo el protocolo de seguridad
app.use(cors());

/*
var whitelist = [''];


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

//Aqui puedes modificar el nombre de la API
app.use("/api/whitelist", Users_whitelist);
app.use("/api/newsletter", Users);
app.use("/api/recaptcha", recaptcha);

//puerto
const port = process.env.PORT;

//mongo
const mongo_uri = process.env.MONGODB_URI;

//validacion de conexion mongo
mongoose.connect(mongo_uri, function(err){
    if (err){
        throw err;
    }else{
        console.log('Conexion exitosa a la bd')
    }
})

app.use(express.static('public'));


//escuchando el puerto
app.listen(port, () => console.log(`Abierto el puerto ${port}!`))

module.exports = app;


