const mongoose = require('mongoose');

//funcion que nos permite decir como se van a estructurar los datos (Schema)
const Schema = mongoose.Schema;

const JugadorSchema = new Schema({
    playerName: String,
    avatarId: Number
})

const SalaSchema = new Schema({
    id: String,
    name: String,
    players: [JugadorSchema]
})

module.exports = mongoose.model('salas',SalaSchema);