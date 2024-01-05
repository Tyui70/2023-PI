function get_username() {
    document.getElementById("username_result").innerText = "ok";
    //suppose to work on : https://vinciracingteam.fr/se-connecter/
    //username = document.getElementById('username-200').value;
    //document.getElementById("username_result").innerText = "The username entered : " + username;
}

document.getElementById("username").addEventListener("click", get_username);
