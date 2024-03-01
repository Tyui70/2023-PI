function showUsername() {
    chrome.runtime.sendMessage('get-user-data', (response) => {
        console.log('Received response', response);
        document.getElementById("messageReceived").innerText = "The username entered : " + response;
    });
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentUrl = tabs[0].url;
    document.getElementById("Link_url").textContent = currentUrl;
});

document.getElementById("UsernameBtn").addEventListener("click", showUsername);