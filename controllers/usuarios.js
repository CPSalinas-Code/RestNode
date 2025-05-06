const {response} = require('express')

const usuariosGet = (req,response)=>{
    const query = req.query;
    console.log(query);
    response.json({
        status: 'OK',
        name: 'get Christian from Controller',
        query
    })
}

const usuariosPost = (req,response)=>{
    
    //const req = JSON.parse(request)
    // console.log(`Datos desde postman ${req}`)

    const body = req.body;
    //console.log(`Datos desde postman ${body.edad}`)
    response.json({
        status: 'OK',
        name: 'post Christian from Controller',
        body
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