const fs = require('fs');


let base = 2
let data =''

for(let i = 1 ; i<=10; i++){
    resp = base* i;
    data+= `${i} * 2 es ${resp} \n`;
}

fs.writeFile('tabla-2.txt',data,(err)=>{
    if(err) throw err;
    console.log(`el archivo ha sido creado`);
})