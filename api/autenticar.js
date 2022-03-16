 /* -------- AUTENTICACION JTW  -------- */
 const express = require('express'),
 bodyParser = require('body-parser'),
 jwt = require('jsonwebtoken'),
 router = express(); 
 
const config = {
llave : "miclaveultrasecreta123*"
};

router.set('llave', config.llave);
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/autenticar', (req, res) => {
if(req.body.usuario === "goni" && req.body.contrasena === "123") {
   const payload = {
       check:  true
   };
   const token = jwt.sign(payload, router.get('llave'), {
       expiresIn: 1440
   });
   res.json({
       mensaje: 'Autenticación correcta',
       token: token
   });
} else {
   res.json({ mensaje: "Usuario o contraseña incorrectos"})
}
})

module.exports = router;