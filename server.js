//https://www.youtube.com/watch?v=64QLTzkDPio&list=PLUdlARNXMVkk7E88zOrphPyGdS50Tadlr&index=4

//para utilizar nuevas funcionalidades
'use strict'

//Importar modulo express
const express = require('express')
//Importar modulo bodyParser (nos permite parsear el cuerpo de la petición (Get,Post))
//Express funciona con middleware, que son como diferentes capas que se van añadiendo y cada vez que se realice una petición HTTP
//va a pasar por esas distintas capas.
const bodyParser = require('body-parser')

//creamos variable app que llama a express.
const app = express()
const port = process.env.PORT || 3000

//añadimos los middlewares con el metodo use con la propiedad extended
app.use(bodyParser.urlencoded({ extended: false}))
//Para poder admitir peticiones con el cuerpo de mensaje en JSON
app.use(bodyParser.json())

//app escucha  el puerto 3000 (=> es igual a function())
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
