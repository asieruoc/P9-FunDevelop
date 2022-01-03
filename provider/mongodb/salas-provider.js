const SalaSchema = require('../../models/sala');
//Array de Salas que enviamos cuando se conecte un cliente web (jugador)
var salas = [];

//exporta funciones (metodos para controlar el comportamiento del array)
module.exports = {
    getSalas: async function() {
        const salas = await SalaSchema.find().populate('players');

        salas.forEach( (sala) => {
            console.log(sala);
        })

        return salas;
    },
    findSalaById: async function(id){
        var sala = await SalaSchema.findOne({id: id}).populate('players');
        return sala;
    },
    isPlayerInSala: function(sala, jugador){
        var result = sala.players.find((p) => {
            return (p.playerName === jugador.playerName);
        });
        return result;
    },
    //hace un push al array de jugadores de la sala en concreto.
    asignarJugadorASala: async function(salaId, jugador) {
        var result = null;
        console.log("llamada a asignar jugador");
        console.log(jugador);
        var sala = await SalaSchema.findOne({id: salaId}).exec();
        console.log(sala);
        if(sala  !== null){
            if(!this.isPlayerInSala(sala, jugador)){
                sala.players.push(jugador);
            }
            console.log(sala);
            sala.save(function(err) {
                if(err) {
                    console.log("Error: could not save sala " + salaId);
                }
                else{
                    result = sala;
                }
            });
        }
        
        return result;
    }
}
