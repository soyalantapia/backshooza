 /* -------- AUTENTICACION JTW  -------- */

const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express(); 
	  
const config = {
	llave : "miclaveultrasecreta123*"
};

// 1
app.set('llave', config.llave);

// 2
app.use(bodyParser.urlencoded({ extended: true }));

// 3
app.use(bodyParser.json());


// 6
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida.' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Inserte el token.' 
      });
    }
 });


  module.exports = {rutasProtegidas}; 
