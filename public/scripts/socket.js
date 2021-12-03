var socket = io();

socket.on("connection");

socket.on(salaId, (data) => {
    const {action, player, position, sala } = data;
    if(action === "newPlayer"){
        reloadSalaInfo(sala);
    }
    else{
        seleccionarCelda(position, player.username);
    }
});


socket.emit(salaId, {action: "newPlayer"})

/**/