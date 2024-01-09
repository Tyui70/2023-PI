let user_input = "default";

const inputElements = document.getElementsByTagName("input");

for (let i = 0; i < inputElements.length; i++) {
    const elementType = inputElements[i].type.toLowerCase();
    if (elementType === "text" || elementType === "email") {
        console.log(`Input element with type "${elementType}" found.`);
        user_input = inputElements[i];
    }
}

function handleInputChange() {
    const userInput = user_input.value;
    chrome.runtime.sendMessage({ userInput: userInput });
    console.log("Content script send" + userInput);
}

userNameInput.addEventListener("input", handleInputChange);