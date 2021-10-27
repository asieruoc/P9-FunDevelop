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

//Lanzar servidor
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});