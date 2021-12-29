const mongoose = require('mongoose');
//funcion que nos permite decir como se van a estructurar los datos (Schema)
const Schema = mongoose.Schema;

const JugadoresSchema = new Schema({
    name: String,
    avatar: String
})

module.exports = mongoose.model('jugadores',JugadoresSchema);