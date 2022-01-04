//Array de Salas que enviamos cuando se conecte un cliente web (jugador)
var salas = [
    {
        id: "sala1",
        name: "SALA 1",
        players: [
            {
                id: 1,
                username: "Jugador 1",
                avatar: 1
            }
        ]
    },
    {
        id: "sala2",
        name: "SALA 2",
        players: [
            {
                id: 2,
                username: "Jugador 2",
                avatar: 2
            }
        ]
    },
    /*{
        id: "sala3",
        name: "SALA 3",
        players: [
            {
                id: 2,
                username: "Jugador 2",
                avatar: 4
            },
            {
                id: 3,
                username: "Jugador 3",
                avatar: 2
            }
        ]
    },
    {
        id: "sala4",
        name: "SALA 4",
        players: []
    }*/
];

//exporta funciones (metodos para controlar el comportamiento del array)
module.exports = {
    getSalas: function() {
        return salas;
    },
    findSalaById: function(id){
        return salas.find((sala) => {
            return (sala.id === id);
        })
    },
    isPlayerInSala: function(sala, jugador){
        var result = sala.players.find((p) => {
            return (p.playerName === jugador.playerName);
        });
        return result;
    },
    //hace un push al array de jugadores de la sala en concreto.
    asignarJugadorASala(salaId, jugador) {
        var sala = this.findSalaById(salaId);
        if(sala && !this.isPlayerInSala(sala, jugador)){
            sala.players.push(jugador);
        }
        return sala;
    }
}
