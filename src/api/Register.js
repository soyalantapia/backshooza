const userController = require('../controllers/Register'); 
const express = require('express');
const router = express.Router();
const { validateCreate } = require('../validators/Register');
// const { corsOptions } = require('../server.js');
//const cors = require('cors');
const passport = require('passport');

const { rutasProtegidas } = require('../security/jwt');
const { exists } = require('../models/Register');

/* -------- ENDPOINTS ----------------------------------------------------------------------------- */

/* -------- ENDPOINTS -> AGREGAR UN USUARIO -------- */
// router.post('/signup', validateCreate ,userController.addUser);
router.post('/signup', passport.authenticate('local-signup', {
    failureMessage: "error"
}),
  function(req, res) {
        res.send(JSON.stringify({ 
            connectedUserStatus: "True",
            connectedUserId:req.user.id,  
            connectedUserEmail: req.user.email,
            connectedUserName:req.user.name,  
            connectedUserRol:req.user.rol 
        }));
    }
  ); 

router.post('/signin',
  passport.authenticate('local-signin', {
  failureRedirect: '/no', 
  failureMessage: true,
 
 }),
  function(req, res) {
        res.send(JSON.stringify({ 
            connectedUserId:req.user.id,  
            connectedUserEmail: req.user.email,
            connectedUserName:req.user.name,  
            connectedUserRol:req.user.rol  
                                }));
    }
  );





module.exports = router;