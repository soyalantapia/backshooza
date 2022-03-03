const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//activo el protocolo de seguridad
app.use(cors());


<<<<<<< HEAD
var whitelist = ['https://shooza.co/', 'http://localhost']
=======
var whitelist = ['http://localhost:3001', 'https://shooza.co/', 'http://localhost'];
>>>>>>> 7687dba0cd8fc3dccbfd7b6698d4a7897913efed
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
      console.log("Bienvenido a la api")
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}



//Aqui puedes modificar el nombre de la API
app.use("/api/newsletter", cors(corsOptions), Users);


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


