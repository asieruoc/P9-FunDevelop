const mongoose = require('mongoose');
//funcion que nos permite decir como se van a estructurar los datos (Schema)
const Schema = mongoose.Schema;

const JugadorSchema = new Schema({
    playerName: String,
    avatarId: Number
})

module.exports = mongoose.model('jugadores',JugadorSchema);