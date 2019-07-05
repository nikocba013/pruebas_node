const fs = require('fs');

let crearArchivo = (base)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`No se ingreso un numero`);
            return
        }

        let data = '';
        for ( let i = 1 ; i<= 10 ; i++){
            data+= `2 * ${i} es ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err)=>{
            if(err){ reject(err)}
            else{
                resolve(`tabla-${base}.txt`); 
            }
        })
    })
}

module.exports = {
    crearArchivo
}
