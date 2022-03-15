const userController = require('../controllers/recaptcha'); 
const express = require('express');
const router = express.Router();

/* -------- ENDPOINTS -------- */
router.post('/verication', userController.recaptcha);

module.exports = router;