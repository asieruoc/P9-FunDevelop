function loadPlayer() {
    if(localStorage.getItem("userData")){
        var li = document.createElement("li");
        var userData = JSON.parse(localStorage.getItem("userData"));

        li.draggable = true;
        li.ondragstart = dragstart;
        li.id = "playerLi";

        let avatar = document.createElement("img");
        avatar.src="/img/Avatar"+userData.avatar+".png";
        avatar.class="layout-image";
        li.appendChild(avatar);
        let span = document.createElement("span");
        span.textContent = userData.username;
        li.appendChild(span);

        document.getElementById("playerList").appendChild(li);
    }
}