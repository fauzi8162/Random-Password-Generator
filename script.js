document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;

    const password = generateRandomPassword(length, includeNumbers, includeSymbols, includeUppercase, includeLowercase);
    document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

function generateRandomPassword(length, includeNumbers, includeSymbols, includeUppercase, includeLowercase) {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characterSet = '';
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;
    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowercase;

    if (characterSet === '') {
        alert('You must select at least one type of character.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}
