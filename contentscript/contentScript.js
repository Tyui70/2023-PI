const userNameInput = document.getElementById("userNameInput");

// Function to handle changes in the input field
function handleInputChange() {
    // Retrieve the value of the input field
    const userInput = userNameInput.value;
    chrome.runtime.sendMessage({ userInput: userInput });
}

// Attach an event listener to the input element
userNameInput.addEventListener("input", handleInputChange);
