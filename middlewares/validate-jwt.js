const { response, request } = require('express');
const jwtPackage = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validateJwt = async (req = request,res = response,next) =>{
    const jwtData = req.header(process.env.NAMEHEADERJET);

    try{
        if(!jwtData){
            return res.status(401).json({
                msg: 'Es necesario JWT'
            });
        }else{
            //const payload = jwtPackage.verify(jwtData,process.env.JWTKEY);
            //console.log(payload);
            const { uid } = jwtPackage.verify(jwtData,process.env.JWTKEY);
            const usuario = await Usuario.findById( uid );
            //console.log('/////////////');
            //console.log(usuario);
            req.usuario = usuario;
            //console.log('/////////////');
            //console.log(req.usuario);
            next();
        }
        

    }catch(err){
        console.log(err);
        res.status(401).json({
            msg: 'JWT Invalido'
        });
    }

}

module.exports = {
    validateJwt
}