const request = require('request');
const recaptcha = (req, res) =>{
    //Si no se manda los datos desde el front lanza error de "algo esta saliendo mal"
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "Algo esta saliendo mal"});
  }
  const secretKey = "6Ld_1sYeAAAAAEGrma3jj5S6E4mKAPf5rnx098Rm";
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);
    //Si la conexion funcia mal lanza el siguiente error
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "fracaso"});
    }
    //Sino verificacion completeda
    return res.json({"responseSuccess" : "recaptcha exito"});
  });
};



//Exportando funciones
module.exports = {recaptcha}; 