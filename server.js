//1
const http = require('http');
const fs = require('fs');
//2
const router = require('./router/router.js');
//Configuraciones del servidor
const serverConfigFile = fs.readFileSync(__dirname + '/config/env.json', 'utf8');//3
const serverConfig = JSON.parse(serverConfigFile);//4
//5
const hostname = serverConfig['hostname'];
const port = serverConfig['port'];

//Crear servidor

const server = http.createServer((req, res) => { //6
    router.init(req,res);
    req.on('data', data => { //7
      if(req.url === "/salas"){
        console.log("Almacenar datos del jugador " + data);
      }
    })
});

//Lanzar servidor
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

// Capturar usuario y avatar
