const conexion=require('../database/db');

exports.save=(req,res)=>{
    const peso=req.body.peso;
    const calidad=req.body.calidad;
    const colorMusculo=req.body.colorMusculo;
    const temp =req.body.temp;
    const freCard=req.body.freCard;
    const freRes=req.body.freCard;
   const fresSan=req.body.fresSan;
   conexion.query('INSERT INTO ganado SET?',{peso:peso,calidad:calidad,colorMusculo:colorMusculo,temp,freCard:freCard,freRes:freRes,fresSan:fresSan},(error,results,clasificacion)=>{
    if(error){
        console.log(error);
    }else{
        res.redirect('/');
    }
   })
    //console.log("peso"+peso+"-"+"calidad"+calidad+"-"+"comusl"+colMus+"-"+"temp"+temp+"-"+"frecard"+freCard+"-"+"freREs"+freRes+"-"+"fresans"+fresSan);
}