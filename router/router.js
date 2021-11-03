//Módulo de enrutado
const fs=require('fs');
const HTML_CONTENT_TYPE="text/html";
const CSS_CONTENT_TYPE="text/css";
const PNG_CONTENT_TYPE="image/png";
const JS_CONTENT_TYPE="text/javascript";

exports.init = function(req, res){
    res.statusCode = 200;


    //Path
    const path=req.url;
    console.log(path);
    encabezadoHTML=res.setHeader('Content-Type', HTML_CONTENT_TYPE);



    //Enrutado
    if(path==="/" && encabezadoHTML){
        const index=fs.readFile(__dirname + '/../public/index.html', (err, data) => {
            if(err){
                console.log("Error en la carga del index.html");
                res.end("Error en la carga del index.html");
            }
                res.end(data);
        }); 
    }else if(path==="/salas"&& encabezadoHTML){
        const index=fs.readFile(__dirname + '/../public/salas.html', (err, data) => {
            if(err){
                console.log("Error en la carga del salas.html");
                res.end("Error en la carga del salas.html");
            }
                res.end(data);
        }); 
    }else if(path.match("\.css$")){
        res.setHeader('Content-Type', CSS_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }
                res.end(data);
        }); 
    }else if(path.match("\.png$")){
        res.setHeader('Content-Type', PNG_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }
                res.end(data);
        }); 
    }else if(path.match("\.js$")){
        res.setHeader('Content-Type', JS_CONTENT_TYPE);
        const css=fs.readFile(__dirname + '/../public/' + path, (err, data) => {
            if(err){
                console.log("Error en la carga de" + path);
                res.end("Error en la carga de" + path);
            }
                res.end(data);

        }); 
    }else{
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        res.end("Error 404 - Pagina no encontrada");
    }

}
