const userController = require('../controllers/Users_whitelist'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users_whitelist')

/* -------- ENDPOINTS -------- */

/* -------- ENDPOINTS -> TODOS LOS USUARIOS -------- */
router.get('/all', userController.findAllUsers);

<<<<<<< HEAD
router.get('/ganadores', userController.FuncionEleccionGanadores);

=======
>>>>>>> parent of 0f1a862 (Primer deploy)
/* -------- ENDPOINTS -> TODOS LOS USUARIOS DE LA WHITELIST -------- */
router.get('/verifiedall', userController.verificacionWhitelist);

/* -------- ENDPOINTS -> VERIFICA UNA WALLET -------- */
router.get('/:wallet', userController.verificacionAddress);

/* -------- ENDPOINTS -> BUSCA POR ID UN USUARIO -------- */
router.get('/:id', userController.findById);

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
<<<<<<< HEAD
router.post('/add', userController.addUser);

/* -------- ENDPOINTS -> ELIGE LOS 9000 GANADORES DE LA WHITELIST -------- */
=======
router.post('/add', validateCreate ,userController.addUser);
>>>>>>> parent of 0f1a862 (Primer deploy)

module.exports = router;