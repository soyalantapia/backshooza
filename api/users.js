const userController = require('../controllers/Users'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users');
// const { corsOptions } = require('../server.js');
//const cors = require('cors');

const { rutasProtegidas } = require('../security/jwt');

/* -------- ENDPOINTS -------- */

/* -------- ENDPOINTS -> TODOS LOS USUARIOS -------- */
<<<<<<< HEAD
router.get('/all',/* cors(corsOptions), */userController.findAllUsers);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add', userController.addUser);
=======
router.get('/all',rutasProtegidas,/* cors(corsOptions), */userController.findAllUsers);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', rutasProtegidas, userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add',rutasProtegidas, validateCreate ,userController.addUser);
>>>>>>> parent of 0f1a862 (Primer deploy)

module.exports = router;