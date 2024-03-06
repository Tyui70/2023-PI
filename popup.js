function showUsername() {
    chrome.runtime.sendMessage('get-user-data', (response) => {
        console.log('Received response', response);
        document.getElementById("messageReceived").innerText = "The username entered : " + response;
    });
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    document.getElementById("url_input").value = currentUrl;
});

document.getElementById("clear_cache").addEventListener("click", function() {
    document.getElementById("url_input").value = "";
    //on cache le résultat
    document.getElementById('resultat').textContent ="";
});

document.getElementById("clear_cache_pwd").addEventListener("click", function() {
    document.getElementById("password_input").value = "";
    //on cache le résultat
    document.getElementById('password_result').textContent ="";
});

document.getElementById("UsernameBtn").addEventListener("click", showUsername);