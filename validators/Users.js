const {body, validationResult} = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')


//Validacion de datos
const validateCreate = [
    //validacion
    body('email', 'Ingrese un email valido')
    .exists() .isEmail() .normalizeEmail(),
    body('name','Ingrese un nombre de usuario valido')
        .exists() .isLength({max:20}) .isLength({min:5}) .not().isEmpty().trim().escape(),
    body('message','Ingrese una motivacion valida')
        .exists() .isLength({max:200}) .isLength({min:10}) .not().isEmpty().trim().escape(),
   /*  body('wallet', 'Ingrese un Wallet valido')   
        .exists() .isLength({min:5}) .not() .isEmpty() .trim() .escape() .blacklist(), */
        (req, res, next) => {
            validateResult(req, res, next)
        }
]

module.exports = { validateCreate }

