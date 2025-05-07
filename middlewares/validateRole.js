//const express = require('express');

const { response } = require("express");



const validateRole = async (req , res = response, next)=>{

    if(!req.usuario){
        return res.status(500).json({
            msg:'no existe datos de usuario'
        });
    }
    
    const {rol,nombre} = req.usuario;
    // console.log(req.usuario);
    if(rol!=process.env.ROLEADMIN){
        return res.status(401).json({
            msg: `no es ${process.env.ROLEADMIN} para realizar esta accion`
        });
    }
    next();
}

//OTRO VALIDACION QUE RECIBA UN ARREGLE. no hacer con split literalmente hay metodos .include() que facilitan todo

module.exports={
    validateRole
}