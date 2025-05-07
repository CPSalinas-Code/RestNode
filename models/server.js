const express = require('express')
const cors = require('cors'); 
const dbConnection = require('../database/configDB');

class Server{
    //Definir Express en servidor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.endpoint = '/api/usuarios'
        //DBConnect
        this.conenectDB();
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

async conenectDB(){
    await dbConnection();
}

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    //Definir rutas
    routes(){
        this.app.use(this.endpoint, require('../routes/user'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;