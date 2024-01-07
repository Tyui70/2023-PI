let userInput;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message && message.userInput) {
        userInput = message.userInput;
        console.log(userInput);
    }
});

function showUsername() {
    document.getElementById("messageReceived").innerText = "The username entered: " + userInput;
}

document.getElementById("UsernameBtn").addEventListener("click", showUsername);

