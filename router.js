const express = require('express');
const router = express.Router();
const conexion = require('./database/db');



router.get('/', (req, res) => {


    conexion.query('SELECT * FROM ganado', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
})

router.get('/grasa1', (req, res) => {
    conexion.query('SELECT * FROM ganado WHERE Peso BETWEEN 15 AND 25 AND colorMusculo BETWEEN 3 AND 5 AND calidad BETWEEN 1 AND 2', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
    
})
router.get('/grasa2', (req, res) => {
    conexion.query('SELECT * FROM ganado WHERE Peso<15 AND Peso>25 AND colorMusculo BETWEEN 1 AND 2 AND colorMusculo BETWEEN 6 AND 7 AND calidad BETWEEN 3 AND 5', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
    
})
router.get('/saludable', (req, res) => {
    conexion.query('SELECT * FROM ganado WHERE temp BETWEEN 37 AND 40 AND freCard BETWEEN 70 AND 80  AND  freRes BETWEEN 15 AND 20 AND fresSan BETWEEN 8 AND 10', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
    
})

router.get('/enferma', (req, res) => {
    conexion.query(`
    SELECT * FROM Ganado 
    WHERE 
        temp> 40 
        AND (freCard <70 
        OR freCard > 80)
        AND freRes BETWEEN 15 AND 20 
        AND fresSan BETWEEN 8 AND 10
    `, (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
    
})

//Crear registros
router.get('/create', (req, res) => {
    res.render('create');
})

//Editar registros
/*
conexion.query('SELECT * FROM ganado WHERE Peso BETWEEN 15 AND 25 AND colorMusculo BETWEEN 3 AND 5 AND calidad BETWEEN 1 AND 2', (error, clasificacion) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { clasificacion: clasificacion });
        }
    });
})*/

//Ruta para eliminar el registro

router.get('/delete/:idGanado', (req, res) => {
    const id = req.params.idGanado;
    conexion.query('DELETE FROM ganado WHERE idGanado=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    })
})



const crud = require('./controllers/crud');

router.post('/save', crud.save);//save es referencia a crud,save
module.exports = router;






