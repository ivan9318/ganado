const { json } = require('express');
const express=require('express');//Referencia a express
const app=express();

app.set('view engine','ejs');//Motor de plantilla ejs
app.use(express.urlencoded({extended:false}));//llamamos nuestros inputs con la propiedad de express
app.use(express(json));//Los convertios a json
app.use('/',require('./router'));
app.use('/grasa1',require('./router'))
app.use('/grasa2',require('./router'))
app.use('/saludable',require('./router'))
app.use('/enferma',require('./router'))
app.listen(8080,()=>{
    console.log('Server corriendo en http://localhost:8080');
})