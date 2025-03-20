document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Store email and password in localStorage (simplified, ensure you don't store sensitive data in production)
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Account created successfully! Please log in.");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please fill in both fields.");
        }
    });

    // Password visibility toggle
    document.querySelector(".show-password").addEventListener("click", function () {
        let password = document.getElementById("password");
        password.type = password.type === "password" ? "text" : "password";
    });
});

function goBack() {
    window.location.href = "../lilac/lilac.html"; // Redirect to lilac.html
}