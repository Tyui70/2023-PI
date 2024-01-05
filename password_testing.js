function checkPasswordStrength(password) {
    // Define criteria for password strength
    const minLength = 8;
    const minLowercase = 1;
    const minUppercase = 1;
    const minNumbers = 1;
    const minSpecialChars = 1;

    // Regular expressions for checking criteria
    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;

    // Check password against criteria
    const lengthIsValid = password.length >= minLength;
    const hasLowercase = password.match(lowercaseRegex)?.length >= minLowercase;
    const hasUppercase = password.match(uppercaseRegex)?.length >= minUppercase;
    const hasNumbers = password.match(numberRegex)?.length >= minNumbers;
    const hasSpecialChars = password.match(specialCharRegex)?.length >= minSpecialChars;

    // Determine password strength based on criteria met
    if (!lengthIsValid) {
        return "very weak";
    } else if (hasLowercase && hasUppercase && hasNumbers && hasSpecialChars) {
        return "strong";
    } else if ((hasLowercase && hasUppercase && hasNumbers) || (hasLowercase && hasUppercase && hasSpecialChars) || (hasLowercase && hasNumbers && hasSpecialChars) || (hasUppercase && hasNumbers && hasSpecialChars)) {
        return "medium";
    } else {
        return "weak";
    }
}

function testPassword() {
    const passwordInput = document.getElementById("password_input");
    const passwordResult = document.getElementById("password_result");

    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    passwordResult.textContent = `Password Strength: ${strength}`;
}

document.getElementById("submit_password").addEventListener("click", testPassword);