/*Funcion que carga el ultimo usuario y avatar seleccionado en la pantalla de inicio*/
function loadUserData() {
    /*Si userData tiene valor*/
    if(localStorage.getItem("userData")){
        /* Analizamos el contenido de la cadena con formato JSON y extraemos el valor de userData guardandolo en la variable userPrefs*/
        var userPrefs = JSON.parse(localStorage.getItem("userData"));
        /*Asignamos a inputName (id del nombre del fomrulario) el valor del username userPrefs.*/
        document.getElementById("inputName").value = userPrefs.username;
        /*Guardamos en radios una lista de todos los avatares*/
        var radios = document.getElementsByName('avatar-radio');
        /*Guardamos en radioPos el avatar seleccionado anteriormente*/
        var radioPos = userPrefs.avatar - 1;
        /*Seleccionamos del array de avatares el avatar selecionado y guardado en radioPos*/
        radios[radioPos].checked = true;
    }
}
/* Funcion que guarda los datos del formulario a localstorage*/
function sendForm() {
    /*Guardamos en la variable form el formulario*/
    var form = document.getElementById("userLogin");
    /*Guardamos en username el valor de inputName (campo donde escribimos el nombre)*/
    var username = document.getElementById("inputName").value;
    /*Guardamos en radios una lista de los avatar*/
    var radios = document.getElementsByName('avatar-radio');
    var found = false;
    var i = 0;
    var avatar = 0;
    /*Bucle donde recorremos la lista de avatares para encontrar el seleccionado por el usuario*/
    while(i < radios.length && !found) {
        if (radios[i].checked) {
            avatar = radios[i].value;
            found = true;
        }
        i++;
    }
    /*Guardamos en userPrefs en clave-valor username y avatar*/
    var userPrefs = {username: username, avatar: avatar};
    /*Convertimos el objeto userPrefs en una cadena de texto JSON y lo guardamos usando localStorage*/
    localStorage.setItem("userData", JSON.stringify(userPrefs));
    /*Iniciamos envio del formulario*/
    form.submit();
}