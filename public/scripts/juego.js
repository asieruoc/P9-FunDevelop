const TIEMPO_TURNO = 5;
const colores = ["rgba(255,0,0,0.5)", "rgba(0,255,0,0.5)", "#0000FF", "#FFFF00"];
var turno = TIEMPO_TURNO;

var coloresJugadores = [];

function buttonListeners() {
    document.querySelectorAll(".cell").forEach((button, i) =>
    button.addEventListener("click", () => {
        if(turno == 0){
            turno = TIEMPO_TURNO;
            var userData = JSON.parse(localStorage.getItem("userData"));
            let data = {
                player: userData,
                position: i,
            }
            socket.emit(salaId, data)
        }
    }))
}

function reloadSalaInfo(sala){
    document.getElementById(sala.id).innerHTML = "";
    sala.players.forEach(player => {
        var li = document.createElement("li");
        li.id = player.id;
        var img = document.createElement("img");
        img.src = "/img/Avatar"+player.avatarId+".png";
        li.append(img);
        var span = document.createElement("span");
        span.id = player.playerName;
        span.innerHTML = player.playerName;
        li.append(span);
        document.getElementById(sala.id).append(li);
    })
    $("#"+sala.id+" li span").each((index, elem)=> {
        coloresJugadores[elem.id] = colores[index];
        $(elem).css("background-color", colores[index]);
    })
}

function seleccionarCelda(position, username) {
    document.querySelectorAll(".cell")[position].innerHTML = username;
    document.querySelectorAll(".cell")[position].setAttribute("disabled", true);
    $(document.querySelectorAll(".cell")[position]).css("background-color", coloresJugadores[username]);
}

function loadJuego() {
   
    buttonListeners();
    setInterval(() => {
        if(turno > 0){
            turno--;
            $("#turno").html(turno + " s");
        }
        else{
            $("#turno").html("Tu turno");
        }
    }, 1000);
}