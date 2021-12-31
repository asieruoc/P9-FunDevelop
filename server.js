// const express = require('express') - Iniciamos un servidor en express y llamamos a la libreria
// express.
//const app = express(); - Variable app que hace que se ejecute esta libreria express.
//const server = http.createServer(app); - Creamos el servidor, requiere la libreria HTTP
// y usando el metodo server le pasamos la variable app (nuestra aplicación)
//const { Server } = require("socket.io"); - Variable io tendra toda la funcionalidad de los sockets.
//Requiere la libreria socket.io y le pasamos la variable server que cointiene el servidor HTTP y nuestra aplicación
//const bodyParser = require('body-parser') - Importar modulo bodyParser (nos permite parsear el cuerpo de la petición (Get,Post))
//Express funciona con middleware, que son como diferentes capas que se van añadiendo y cada vez que se realice una petición HTTP
//va a pasar por esas distintas capas.
//const mongoose = require('mongoose'); - Módulo interno de Node. Nos ayuda a realizar la interacción con las peticiones request y response.

const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: { origin: "*" } });
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//CONNECTING TO DB
mongoose.connect('mongodb://localhost/fundb')
    .then(db => console.log('Database connected'))
    .catch(err=> console.log(err));

// IMPORTING ROUTES
//Módulo que hemos generado nosotros.
const router = require('./router/router.js');

//MIDDLEWARES
//Añadimos los middlewares con el metodo use con la propiedad extended
app.use(bodyParser.urlencoded({ extended: false}));
//Para poder admitir peticiones con el cuerpo de mensaje en JSON
app.use(bodyParser.json());
app.use(express.json());
app.use('/', router);
//indicamos cual es la ruta que tendrán los ficheros estáticos,
//siendo public la carpeta donde tenemos la parte publica.
app.use(express.static("public"));

// SETTINGS
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.hostname);
var engines = require('consolidate');
app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// WEBSOCKET SERVER
//Servidor de websocket (io) este atento cuando se realiza una conexión (io.on)
//Cuando reciba el mensaje connection ejecuta la función (recibe como parametro un socket)
//el socket que esta abierto en ese momento, ese cliente web que ha mandado el mensaje.
io.on("connection", (socket) => {
  console.log("User connected: " + socket.id)

  //Recupera salas.
  var provider = require('./provider/memory/salas-provider');

  //Recorre las salas.
  provider.getSalas().forEach(sala => {
    console.log("Creado socket en sala "+sala.id);
    //Escucha el evento y crea un socket asociado a cada sala
    socket.on(sala.id, (data) => {
      console.log("Recibida accion en sala "+ sala.id);
      if(data.action === "newPlayer"){
        io.emit(sala.id, {action: "newPlayer", sala: sala})
      }
      else{
        const player = data.player
        const position = data.position;
        //socket.broadcast.emit(sala.id, data)
      
        io.emit(sala.id, data)
      }      
  })
  });
})

// STARTING THE SERVER
//Ponemos el servidor a escuchar (=> es igual a function())
server.listen(process.env.port, () => {
  console.log(`Servidor corriendo en http://${process.env.hostname}:${process.env.port}`);
})
