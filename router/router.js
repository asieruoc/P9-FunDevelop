//Módulo de enrutado
const fs=require('fs');
const HTML_CONTENT_TYPE="text/html";
const CSS_CONTENT_TYPE="text/css";
const PNG_CONTENT_TYPE="image/png";
const JS_CONTENT_TYPE="text/javascript";

const path = require('path');
var express = require('express');
var router = express.Router();
var provider = require('../provider/memory/salas-provider');



// Home page route.
router.get('/', function (req, res) {
    //res.render(path.join(__dirname, '/../public/index.html'), {name: "hola"});
    res.render('index');
})

router.post('/juego/:salaId', function(req, res) {
    var player = req.body.userData;
    var sala = provider.asignarJugadorASala(req.params.salaId, player);
    res.send(JSON.stringify(sala));
}); 

router.get('/sala/:salaId', function (req, res) {
    var sala = provider.findSalaById(req.params.salaId);
    res.render('juego', {sala: sala});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
})

router.get('/salas', function (req, res) {
    res.render('salas', {salas: provider.getSalas()});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
})

router.post('/salas', function (req, res) {
    res.render('salas', {salas: provider.getSalas()});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
})
  
module.exports = router;
/*
exports.init = function(req, res){
    res.statusCode = 200;
    //Path
    const path=req.url;
    console.log(path);
    //Enrutado
    if(path==="/"){
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        const index=fs.readFile(__dirname + '/../public/index.html', (err, data) => {
            if(err){
                console.log("Error en la carga del index.html");
                res.end("Error en la carga del index.html");
            }else{
                res.end(data);
            }
        }); 
    }else if(path==="/salas"){
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        const index=fs.readFile(__dirname + '/../public/salas.html', (err, data) => {
            if(err){
                console.log("Error en la carga del salas.html");
                res.end("Error en la carga del salas.html");
            }else{
                res.end(data);
            }
        }); 
    }else if(path.match("\.css$")){
        res.setHeader('Content-Type', CSS_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }else{
                res.end(data);
            }
        }); 
    }else if(path.match("\.png$")){
        res.setHeader('Content-Type', PNG_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }else{
                res.end(data);
            }
        }); 
    }else if(path.match("\.js$")){
        res.setHeader('Content-Type', JS_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }else{
                res.end(data);
            }
        }); 
    }else{
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        res.end("Error 404 - Pagina no encontrada");
    }
}
/**/