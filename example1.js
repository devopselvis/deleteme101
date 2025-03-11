// Hardcoded credentials example
const username = "admin";
const password = "password123"; // Sensitive information should not be hardcoded

// Example usage
function login(user, pass) {
    if (user === username && pass === password) {
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}
