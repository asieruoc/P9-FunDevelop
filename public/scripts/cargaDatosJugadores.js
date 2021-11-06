/*función que carga los datos del jugador desde localstorage*/
function loadPlayer() {
    /*Si userData tiene valor*/
    if(localStorage.getItem("userData")){
        /*Modificamos DOM. Creamos un elemento (nuevo nodo) Lista*/
        var li = document.createElement("li");
        /* Analizamos el contenido de la cadena con formato JSON y extraemos el valor de userData guardandolo en la variable userData*/
        var userData = JSON.parse(localStorage.getItem("userData"));

        /*Habilitamos que los elementos li se puedan arrastrar.*/
        li.draggable = true;
        /*Comienza a arrastrar un element*/
        li.ondragstart = dragstart;
        li.id = "playerLi";

        /*Modificamos DOM. Creamos un elemento (nuevo nodo) Imagen*/
        let avatar = document.createElement("img");
        /*Guardamos la imagen del avatar del jugador*/
        avatar.src="/img/Avatar"+userData.avatar+".png";
        avatar.class="layout-image";
        /*Añadimos avatar a la lista.*/
        li.appendChild(avatar);
        /*Modificamos DOM. Creamos un elemento span (nuevo nodo) (Contenedor)*/
        let span = document.createElement("span");
        /*Guardamos en formato texto el nombre del jugador*/
        span.textContent = userData.username;
        /*Añadimos variable span (nombre del jugador) a la lista.*/
        li.appendChild(span);
        /*Añadimos a la lista "Jugadores en espera" la lista con el jugador.*/
        document.getElementById("playerList").appendChild(li);
    }
}