 /* -------- PROTOCOLO DE SEGURIDAD -------- */
 const express = require('express');
 const app = express();

 const cors = require('cors');


 var whitelist = ['http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(('Acceso denegado'))
    }
  }
}

/* -------- PROTOCOLO DE SEGURIDAD  -> EXPORTANDO FUNCIONES -------- */
module.exports = {corsOptions}; 
