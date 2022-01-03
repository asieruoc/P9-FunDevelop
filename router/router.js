//Módulo de enrutado
var express = require('express');
var router = express.Router();
var provider = require('../provider/mongodb/salas-provider');

const Jugador = require('../models/jugador');

// Home page route.
router.get('/', function (req, res) {
    res.render('index');
})

//se estan pasando los datos del usuario
router.post('/api/juego/:salaId', async(req, res) => {
    var player = req.body.userData;
    var sala = await provider.asignarJugadorASala(req.params.salaId, player);
    res.send(JSON.stringify(sala));
}); 

//Insertamos jugador en Mongo.
router.post('/api/login', async(req, res) => {

    const query = Jugador.findOne({
        playerName: req.body.userData.playerName
      });
    var player = await query.exec();

    // Comprobar si el jugador existe
    if(player === null){
        player = new Jugador(req.body.userData);
        await player.save();
    }
    else{
        player.avatarId = req.body.userData.avatarId;
        await player.save();
    }
   
    res.send(JSON.stringify(player));
})



router.get('/sala/:salaId', async (req, res) => {
    var sala = await provider.findSalaById(req.params.salaId);
    console.log("sala " + req.params.salaId);
    console.log(sala.players);

    res.render('juego', {sala: sala});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
})

router.get('/salas', async (req, res) => {
    console.log("llamada a provider");
    const salas = await provider.getSalas();
    console.log(salas);
    res.render('salas', {salas: salas});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
})

router.post('/salas', async(req, res) => {

    console.log("llamada a provider");
    const salas = await provider.getSalas();
    console.log(salas);
    res.render('salas',{salas: salas});
})

//router.post('/salas', function (req, res) {
 //   res.render('salas', {salas: provider.getSalas()});

    //res.sendFile(path.join(__dirname, '/../public/salas.html'));
//})
  
module.exports = router;


