//Módulo de enrutado
var express = require('express');
var router = express.Router();
var provider = require('../provider/memory/salas-provider');

const Jugador = require('../models/jugador');

// Home page route.
router.get('/', function (req, res) {
    res.render('index');
})

//se estan pasando los datos del usuario
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

//Insertamos jugador en Mongo.
router.post('/salas', async(req, res) => {
    const jugador = new Jugador(req.body);
    await jugador.save();
    res.render('salas',{salas: provider.getSalas()});
})

//router.post('/salas', function (req, res) {
 //   res.render('salas', {salas: provider.getSalas()});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
//})
  
module.exports = router;


