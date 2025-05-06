const {response} = require('express')

const usuariosGet = (req,response)=>{
    response.json({
        status: 'OK',
        name: 'get Christian from Controller'
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

module.exports = {
    usuariosGet,
    usuariosPost
}