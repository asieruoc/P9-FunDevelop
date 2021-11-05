function loadPlayer() {
    /*Si userData tiene valor*/
    if(localStorage.getItem("userData")){
        /*Creamos un elemento Lista*/
        var li = document.createElement("li");
        /* Analizamos el contenido de la cadena con formato JSON y extraemos el valor de userData guardandolo en la variable userData*/
        var userData = JSON.parse(localStorage.getItem("userData"));

        /*Habilitamos que los elementos li se puedan arrastrar.*/
        li.draggable = true;
        /*Comienza a arrastrar un element*/
        li.ondragstart = dragstart;
        li.id = "playerLi";

        /*Creamos un elemento Imagen*/
        let avatar = document.createElement("img");
        /*Guardamos la imagen del avatar del jugador*/
        avatar.src="/img/Avatar"+userData.avatar+".png";

        avatar.class="layout-image";

        li.appendChild(avatar);
        /*Creamos un elemento span (Contenedor)*/
        let span = document.createElement("span");
        /*Guardamos en formato texto el nombre del jugador*/
        span.textContent = userData.username;

        li.appendChild(span);

        document.getElementById("playerList").appendChild(li);
    }
}