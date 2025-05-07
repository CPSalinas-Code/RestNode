const {response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');



const usuariosGet = (req,response)=>{
    const query = req.query;
    console.log(query);
    response.json({
        status: 'OK',
        name: 'get Christian from Controller',
        query
    })
}

const usuariosPost = async  (req,response)=>{
    
    //const req = JSON.parse(request)
    // console.log(`Datos desde postman ${req}`)

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, password, rol} );

    //encript
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password,salt);

    //guardarDB
    await usuario.save();

    //console.log(`Datos desde postman ${body.edad}`)
    response.json({
        status: 'OK',
        name: 'post Christian from Controller',
        usuario
    })
}

const usuariosPut = (req,response)=>{
    //const idPut = req.params.idPut;
    const {id} = req.params;
    console.log(id )
    response.json({
        status: 'OK',
        name: 'put Christian',
        userSelec: id
    })
}

const usuarioDelete = (req,response)=>{
    response.json({
        status: 'OK',
        name: 'delete Christian'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuarioDelete
}