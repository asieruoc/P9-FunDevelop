//Variable que utiliza io (libreria socket io del lado cliente),
var socket = io();

socket.on("connection");

//Escuchamos eventos en ese socket creado.
socket.on(salaId, (data) => {
    const {action, player, position, sala } = data;
    if(action === "newPlayer"){
        reloadSalaInfo(sala);
    }
    else{
        seleccionarCelda(position, player.playerName);
    }
});

//El cliente emite desde un socket. Utilizamos nuestro socket y la funcion emit para que emita un evento
// y le pasamos el objeto newPlayer.
socket.emit(salaId, {action: "newPlayer"})
