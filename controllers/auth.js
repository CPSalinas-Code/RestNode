const {response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req, res = response)=>{

    const {correo, password} = req.body;

    try {
        //verificar que usr exista
        const usuario = await Usuario.findOne( {correo} );
        if(!usuario){
            return  res.status(400).json({ //return porque corta el flujo completamente
                msg:'Usr/ Pass incorrectos - usr correo'
            });
        }
        //verificar estado activo
        if(!usuario.estado){
            return res.status(400).json({
                msg:'Usr inactivo'
            });
        }
        //verificar contrasena
        const validPaswrod = bcryptjs.compareSync(password, usuario.password);
        if (!validPaswrod){
            return res.status(400).json({
                msg:'Password contrasena'
            });
        }

        //generar jwt
        const jwtToken = await generarJWT(usuario.id);
    
        res.json({
            usuario,
            jwtToken
        });


    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:'Error en servidor'
        });
    }

}

module.exports = {
    login 
}