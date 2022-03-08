const userController = require('../controllers/Users_whitelist'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users_whitelist')

// --- Endpoints ---

//Todos los usuarios  
router.get('/all', userController.findAllUsers);

//Todos los usuarios de la whitelist
router.get('/verifiedall', userController.verificacionWhitelist);

//Todos los usuarios de la whitelist
router.get('/:wallet', userController.verificacionAddress);

//Buscar por ID
router.get('/:id', userController.findById);

//Ruta para agregar un usuario. validaCreate es la validacion si los datos son correctos
router.post('/add', validateCreate ,userController.addUser);

module.exports = router;