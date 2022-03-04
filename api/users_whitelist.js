const userController = require('../controllers/Users_whitelist'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users_whitelist')

//Endpoints
router.get('/all', userController.findAllUsers);
router.get('/:id', userController.findById);
//Ruta para agregar un usuario. validaCreate es la validacion si los datos son correctos
router.post('/add', validateCreate ,userController.addUser);

module.exports = router;