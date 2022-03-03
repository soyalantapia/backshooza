const userController = require('../controllers/Users'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Users')

//Endpoints
router.get('/all', userController.findAllUsers);
router.get('/:id', userController.findById);
//Ruta para agregar un usuario. validaCreate es la validacion si los datos son correctos
router.post('/add', validateCreate ,userController.addUser);

module.exports = router;