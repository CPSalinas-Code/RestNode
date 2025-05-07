const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRolValido = async (rol='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`el Rol ${rol} no esta registrado en DB`);
    }

}

const emailExiste = async (correo='') => {
    const emailValidate = await Usuario.findOne({correo});
    if (emailValidate){
        throw new Error(`El email ${correo} ya existe en DB`);
    }

}

module.exports = {
    esRolValido,
    emailExiste,
}