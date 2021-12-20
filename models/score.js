const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
})

module.exports = model('score', scoreSchema)