const mysql=require('mysql');
const router = require('../router');

const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ivanalejandrolm16',
    database:'mydb'
})

conexion.connect((error)=>{
    
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Conectado');
})

module.exports=conexion;