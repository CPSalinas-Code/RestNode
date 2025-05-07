const mongoose = require('mongoose')

const dbConnection = async ()=>{
    try{

        await mongoose.connect(process.env.MONGODB_CONN
        //     ,{
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
        );

        console.log('Conexion exitosa a DB');

    }catch(err){
        console.log(err);
        throw new Error('Error conexion DB');
    }
}

module.exports = dbConnection;