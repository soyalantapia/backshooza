const {body, validationResult} = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')


 /* -------- VALIDACION DE DATOS  -------- */

const validateCreate = [
    body('email', 'Ingrese un email valido')
    .isEmail() .normalizeEmail(),
    body('name','Ingrese un nombre de usuario valido')
       .isLength({max:20}) .isLength({min:5}) .not() .isEmpty() .trim() .escape(),
    body('message','Ingrese una motivacion valida')
     .isLength({max:200}) .isLength({min:10}) .not(). isEmpty() .trim() .escape(),
        (req, res, next) => {
                validateResult(req, res, next)
        }
]

module.exports = { validateCreate }

