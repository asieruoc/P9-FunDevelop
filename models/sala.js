const { Schema, model } = require('mongoose')

const salaSchema= new Schema({
    sala:{
        type: String,
        required: true,
    },
    users:{
        type: Number,
        required: true,
    },
 
})

module.exports = model('sala', salaSchema);