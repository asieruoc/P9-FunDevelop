//Carga de módulos o librerias externas
//Módulo interno de Node. Nos ayuda a realizar la interacción con las peticiones request y response.
const http = require('http');
const fs = require('fs');
//Módulo que hemos generado nosotros.
const router = require('./router/router.js');

//Configuraciones del servidor
//Guardamos en la variable serverConfigFile la lectura del fichero env.json en texto plano.
const serverConfigFile = fs.readFileSync(__dirname + '/config/env.json', 'utf8');
//Parseamos el fichero y lo guardamos en la variable serverConfig.
const serverConfig = JSON.parse(serverConfigFile);
//Damos el valor que corresponde en cada uno de sus variables.
const hostname = serverConfig['hostname'];
const port = serverConfig['port'];

//Importar modulo express
const express = require('express')
//Importar modulo bodyParser (nos permite parsear el cuerpo de la petición (Get,Post))
//Express funciona con middleware, que son como diferentes capas que se van añadiendo y cada vez que se realice una petición HTTP
//va a pasar por esas distintas capas.
const bodyParser = require('body-parser')

//creamos variable app que llama a express.
const app = express()


//añadimos los middlewares con el metodo use con la propiedad extended
app.use(bodyParser.urlencoded({ extended: false}))
//Para poder admitir peticiones con el cuerpo de mensaje en JSON
app.use(bodyParser.json())
app.use('/', router);
app.use(express.static("public"));

var engines = require('consolidate');

app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//app escucha  el puerto 3000 (=> es igual a function())
app.listen(port, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
})

/*
//Crear servidor
//Peticiones Request (via navegador), Devolvemos una respuesta (res)
//Ante cualquier request devolveremos las siguientes respuestas:
const server = http.createServer((req, res) => {
    router.init(req,res);
    // we can access HTTP headers
    req.on('data', data => {
      if(req.url === "/salas"){
        console.log("Almacenar datos del jugador " + data);
      }
    })
});
/**/

// Capturar usuario y avatar
