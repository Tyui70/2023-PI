function checkPasswordStrength(password) {
    const patterns = {
        veryWeak: /^.{1,5}$/, // Matches passwords of 1 to 5 characters
        weak: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,9}$/, // Matches passwords with lower, upper, digit & special, 6-9 chars
        medium: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{10,}$/, // Matches passwords with lower, upper, digit & special, 10+ chars
        strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/ // Matches passwords with lower, upper, digit, special, 12+ chars
    };

    if (patterns.strong.test(password)) {
        return "Strong";
    } else if (patterns.medium.test(password)) {
        return "Medium";
    } else if (patterns.weak.test(password)) {
        return "Weak";
    } else if (patterns.veryWeak.test(password)) {
        return "Very Weak";
    } else {
        return "Invalid";
    }
}



// Function to handle password testing
function testPassword() {
    const passwordInput = document.getElementById("password_input");
    const passwordResult = document.getElementById("password_result");

    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    passwordResult.textContent = `Password Strength: ${strength}`;
}

// Event listener for the password test button
document.getElementById("submit_password").addEventListener("click", testPassword);