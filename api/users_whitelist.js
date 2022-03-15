const userController = require('../controllers/Users_whitelist'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users_whitelist')

/* -------- ENDPOINTS -------- */

/* -------- ENDPOINTS -> TODOS LOS USUARIOS -------- */
router.get('/all', userController.findAllUsers);

/* -------- ENDPOINTS -> TODOS LOS USUARIOS DE LA WHITELIST -------- */
router.get('/verifiedall', userController.verificacionWhitelist);

/* -------- ENDPOINTS -> VERIFICA UNA WALLET -------- */
router.get('/:wallet', userController.verificacionAddress);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add', validateCreate ,userController.addUser);

module.exports = router;