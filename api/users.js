const userController = require('../controllers/Users'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users');
// const { corsOptions } = require('../server.js');
//const cors = require('cors');

const { rutasProtegidas } = require('../security/jwt');

/* -------- ENDPOINTS -------- */

/* -------- ENDPOINTS -> TODOS LOS USUARIOS -------- */
router.get('/all',/* cors(corsOptions), */userController.findAllUsers);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add', userController.addUser);

module.exports = router;