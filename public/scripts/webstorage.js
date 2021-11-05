function loadUserData() {
    if(localStorage.getItem("userData")){
        var userPrefs = JSON.parse(localStorage.getItem("userData"));
        document.getElementById("exampleName").value = userPrefs.username;
        var radios = document.getElementsByName('avatar-radio');
        var radioPos = userPrefs.avatar - 1;
        radios[radioPos].checked = true;
    }
}
function sendForm() {
    var form = document.getElementById("userLogin");
    var username = document.getElementById("exampleName").value;
    var radios = document.getElementsByName('avatar-radio');
    var found = false;
    var i = 0;
    var avatar = 0;
    while(i < radios.length && !found) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            avatar = radios[i].value;
            found = true;
        }
        i++;
    }
    var userPrefs = {username: username, avatar: avatar};
    localStorage.setItem("userData", JSON.stringify(userPrefs));
    form.submit();
}