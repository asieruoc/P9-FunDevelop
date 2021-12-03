var socket = io();

socket.on("connection");

socket.on(salaId, (data) => {
    const {action, player, position, sala } = data;
    if(action === "newPlayer"){
        document.getElementById(sala.id).innerHTML = "";
        sala.players.forEach(player => {
            var li = document.createElement("li");
            li.id = player.id;
            var img = document.createElement("img");
            img.src = "/img/Avatar"+player.avatar+".png";
            li.append(img);
            li.append(player.username);
            document.getElementById(sala.id).append(li);
        })
    }
    else{
        document.querySelectorAll(".cell")[position].innerHTML = player.username;
        document.querySelectorAll(".cell")[position].setAttribute("disabled", true);
    }
});

function buttonListeners() {
    document.querySelectorAll(".cell").forEach((button, i) =>
    button.addEventListener("click", () => {
        var userData = JSON.parse(localStorage.getItem("userData"));
        let data = {
            player: userData,
            position: i,
        }
        socket.emit(salaId, data)
    }))
}

socket.emit(salaId, {action: "newPlayer"})

/**/