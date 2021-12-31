
/*Funcion que carga el ultimo usuario y avatar seleccionado en la pantalla de inicio*/
/*
function loadUserData() {
    /!*Si userData tiene valor*!/
    if(localStorage.getItem("userData")){
        /!* Analizamos el contenido de la cadena con formato JSON y extraemos el valor de userData guardandolo en la variable userPrefs*!/
        var userPrefs = JSON.parse(localStorage.getItem("userData"));
        /!*DOM. Recuperamos un elemento por su identificador (inputName) y que tenga el valor de username*!/
        document.getElementById("inputName").value = userPrefs.username;
        /!*DOM. Recuperamos en un array, los elementos por su nombre (avatar-radio)*!/
        var radios = document.getElementsByName('avatar-radio');
        /!*Guardamos en radioPos el avatar seleccionado anteriormente*!/
        var radioPos = userPrefs.avatar - 1;
        /!*Seleccionamos del array de avatares el avatar selecionado y guardado en radioPos*!/
        radios[radioPos].checked = true;
    }
}
/!* Funcion que guarda los datos del formulario a localstorage*!/
function sendForm() {
    /!*DOM. Recuperamos un elemento (formulario) por su identificador (userLogin) *!/
    var form = document.getElementById("userLogin");
    /!*DOM. Recuperamos un elemento (nombre jugador) por su identificador (inputName)*!/
    var username = document.getElementById("inputName").value;
    /!*DOM. Recuperamos los elementos (avatares) por su nombre (avatar-radio)*!/
    var radios = document.getElementsByName('avatar-radio');
    var found = false;
    var i = 0;
    var avatar = 0;
    /!*Bucle donde recorremos el array de avatares para encontrar el seleccionado por el usuario*!/
    while(i < radios.length && !found) {
        if (radios[i].checked) {
            avatar = radios[i].value;
            found = true;
        }
        i++;
    }
    /!*Guardamos en userPrefs en clave-valor username y avatar*!/
    var userPrefs = {username: username, avatar: avatar};

    /!*Convertimos el objeto userPrefs en una cadena de texto JSON y lo guardamos usando localStorage*!/
    localStorage.setItem("userData", JSON.stringify(userPrefs));
    /!*Iniciamos envio del formulario*!/
    form.submit();
}*/

