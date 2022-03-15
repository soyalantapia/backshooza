const userController = require('../controllers/Users'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users');
const userControllerRe = require('../controllers/recaptcha'); 

/* 
const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 }); */



/* -------- ENDPOINTS -------- */

/* -------- ENDPOINTS -> TODOS LOS USUARIOS -------- */
router.get('/all',userController.findAllUsers);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add', validateCreate ,userController.addUser);

module.exports = router;