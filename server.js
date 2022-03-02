const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Aqui puedes modificar el nombre de la API
app.use("/api/newsletter",Users);


//puerto
const port = 4000;

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
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;


