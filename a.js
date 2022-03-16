const path = require('path');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



 /* -------- MOSTRAR PAGINA ESTATICA  -------- */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

 /* -------- LEVANTANDO SERVIDOR -------- */
const port = 3003;
app.listen(port, () => console.log(`Abierto el puerto ${port}!`))

module.exports = app;


