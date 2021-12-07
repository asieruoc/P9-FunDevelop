//Carga de módulos o librerias externas
//Módulo interno de Node. Nos ayuda a realizar la interacción con las peticiones request y response.
const http = require('http');
const fs = require('fs');
//Módulo que hemos generado nosotros.
const router = require('./router/router.js');

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.hostname);
/*//Configuraciones del servidor
//Guardamos en la variable serverConfigFile la lectura del fichero env.json en texto plano.
const serverConfigFile = fs.readFileSync(__dirname + '/config/env.json', 'utf8');
//Parseamos el fichero y lo guardamos en la variable serverConfig.
const serverConfig = JSON.parse(serverConfigFile);
//Damos el valor que corresponde en cada uno de sus variables.
const hostname = serverConfig['hostname'];
const port = serverConfig['port'];*/

//Importar modulo express
const express = require('express')
//Importar modulo bodyParser (nos permite parsear el cuerpo de la petición (Get,Post))
//Express funciona con middleware, que son como diferentes capas que se van añadiendo y cada vez que se realice una petición HTTP
//va a pasar por esas distintas capas.
const bodyParser = require('body-parser')

//creamos variable app que llama a express.
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: { origin: "*" } });

//añadimos los middlewares con el metodo use con la propiedad extended
app.use(bodyParser.urlencoded({ extended: false}));
//Para poder admitir peticiones con el cuerpo de mensaje en JSON
app.use(bodyParser.json());
app.use(express.json());

app.use('/', router);
//indicamos cual es la ruta que tendrán los ficheros estáticos, lo hacemos con el middleware express.static
app.use(express.static("public"));

var engines = require('consolidate');

app.set('views', __dirname + '/public');

app.engine('html', engines.mustache);
app.set('view engine', 'html');

//arrancamos servidor io que ejecutará la función cada vez que alguien se conecte al servidor.
io.on("connection", (socket) => {
  console.log("User connected: " + socket.id)

  //recupera salas.
  var provider = require('./provider/memory/salas-provider');

  //recorre las salas.
  provider.getSalas().forEach(sala => {
    console.log("Creado socket en sala "+sala.id);
    //crear un socket asociado a cada sala
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
  /**/
})

//app escucha  el puerto 3000 (=> es igual a function())
server.listen(process.env.port, () => {
  console.log(`Servidor corriendo en http://${process.env.hostname}:${process.env.port}`);
})
