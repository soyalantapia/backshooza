const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Users = require('./api/users');
const Users_whitelist = require('./api/users_whitelist');


const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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



//puerto
const port = 3001;

//mongo
const mongo_uri = 'mongodb+srv://alantapia:2425cmpsm@cluster0.hozyc.mongodb.net/shooza?retryWrites=true&w=majority';

//validacion de conexion mongo
mongoose.connect(mongo_uri, function(err){
    if (err){
        throw err;
    }else{
        console.log('Conexion exitosa a la bd')
    }
})


//escuchando el puerto
app.listen(port, () => console.log(`Abierto el puerto ${port}!`))

module.exports = app;


