const path = require('path');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session'); 
const flash = require('connect-flash');


 /* -------- INITIALIZATIONS -------- */
 const app = express(); 
 app.use(bodyParser.json());

 require ('./database');
 require ('./passport/local-auth');


 /* -------- PROTOCOLO DE SEGURIDAD -------- */
 const cors = require('cors');
 app.use(cors());


/* -------- PROTOCOLO DE SEGURIDAD  -> EXPORTANDO FUNCIONES -------- 
module.exports = {corsOptions}; */

 /* -------- MIDDLEWARE-------- */
 app.use(morgan('dev'));
 app.use(express.urlencoded({extended: false}));
 app.use(session({
   secret: 'mysecretsession',
   resave: false,
   saveUninitialized: false
 }));
 app.use(flash());
 app.use(passport.initialize());
 app.use(passport.session());

 /* -------- VARIABLE DE ENTORNO -------- */
 require('dotenv').config();


 /* -------- DECLARACION DE APIS -------- */
const Login = require('./api/Login');
const Register = require('./api/Register');
const autenticar = require('./api/autenticar');


 /* -------- NOMBRES DE APIS  -------- */
<<<<<<< HEAD:server.js
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
=======
 app.use("/api/", Login);
 app.use("/api/", Register);
 app.use("/api/", autenticar);

>>>>>>> 0f1a8627bdcfc59f175af5c3444cce25cb6cbc1b:src/server.js

 /* -------- MOSTRAR PAGINA ESTATICA  -------- */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


 /* -------- LEVANTANDO SERVIDOR -------- */
const port = process.env.PORT;
app.listen(port, () => console.log(`Abierto el puerto ${port}!`))

module.exports = app;


