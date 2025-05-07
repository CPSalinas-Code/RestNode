const jwtPackage = require('jsonwebtoken');

const generarJWT = (uid='')=>{

    return new Promise((resolve, reject)=>{

        const payload = {uid};
        jwtPackage.sign(payload,process.env.JWTKEY,{
            expiresIn: '4h'
        },(err, token)=>{
            if(err){
                console.log(err);
                reject(' No se pudo generar jwt');
            }else{
                resolve(token);
            }
        } );

    });

}

module.exports = {
    generarJWT
}