let userInput = "default";
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.userInput) {
        userInput = message.userInput;
        console.log("background received : " + userInput);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'get-user-data') {
        sendResponse(userInput);
        console.log("background send :" + userInput);
    }
});
