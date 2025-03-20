document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("loginPassword").value;
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (enteredUsername === storedEmail && enteredPassword === storedPassword) {
            alert("Login successful! Redirecting...");
            window.location.href = "../lilac/lilac.html"; // Redirect to chatbot page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});


function goBack() {
    window.location.href = "../lilac/lilac.html"; // Redirect to lilac.html
}
