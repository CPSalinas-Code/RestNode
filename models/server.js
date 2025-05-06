const express = require('express')
const cors = require('cors') 

class Server{
    //Definir Express en servidor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.endpoint = '/api/usuarios'

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
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