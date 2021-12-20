//Usamos la librería de mongoose
const mongoose = require('mongoose')

//Creamos la conexión con mongoDB
const uri = 'mongodb://127.0.0.1:27017/p9p4_fundevelop';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.catch(err => console.log(err));

db.once('open', _ =>{
    console.log('Database is connected to', uri);
})

db.on('error', err => {
    console.log(err)
})