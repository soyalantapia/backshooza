const {body, validationResult} = require('express-validator');
const { validateResult } = require('../helpers/validateHelper_whitelist')


//Validacion de datos
const validateCreate = [
    //validaciones
    body('email', 'Ingrese un email valido')
    .isEmail() .normalizeEmail(),
    body('name','Ingrese un nombre de usuario valido')
       .isLength({max:20}) .isLength({min:5}) .not() .isEmpty() .trim() .escape(),
    body('phone','Ingrese un telefono valido')
     .isLength({max:15}) .isLength({min:9}) .not(). isEmpty() .trim() .escape(),
    body('wallet', 'Ingrese un Wallet valido')   
        .exists() .isLength({min:5}) .not() .isEmpty() .trim() .escape() .blacklist(),
        (req, res, next) => {
            validateResult(req, res, next)
        }
]

module.exports = { validateCreate }

