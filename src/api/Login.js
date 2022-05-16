const userController = require('../controllers/Login'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Login');
// const { corsOptions } = require('../server.js');
//const cors = require('cors');

const { rutasProtegidas } = require('../security/jwt');

/* -------- ENDPOINTS ----------------------------------------------------------------------------- */

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
router.post('/add',validateCreate ,userController.addUser);

module.exports = router;