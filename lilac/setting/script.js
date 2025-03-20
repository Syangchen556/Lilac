// For the Main Settings Page (index.html)
document.getElementById("saveSettingsBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let theme = document.getElementById("theme").value;
    let language = document.getElementById("language").value;

    // Save settings to localStorage (so they persist across pages)
    localStorage.setItem("username", username);
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);

    // Redirect to lilac.html after saving
    window.location.href = "lilac.html";
});

// For the Advanced Settings Page (settings.html)
document.getElementById("saveAdvancedSettingsBtn").addEventListener("click", function() {
    let chatHistory = document.getElementById("chatHistory").checked;
    let responseTime = document.getElementById("responseTime").value;
    let personality = document.getElementById("personality").value;

    // Save advanced settings to localStorage
    localStorage.setItem("chatHistory", chatHistory);
    localStorage.setItem("responseTime", responseTime);
    localStorage.setItem("personality", personality);

    // Redirect to lilac.html after saving
    window.location.href = "lilac.html";
});

// On lilac.html, display the saved settings
if (window.location.href.includes("lilac.html")) {
    document.getElementById("savedUsername").textContent = localStorage.getItem("username");
    document.getElementById("savedTheme").textContent = localStorage.getItem("theme");
    document.getElementById("savedLanguage").textContent = localStorage.getItem("language");
    document.getElementById("savedChatHistory").textContent = localStorage.getItem("chatHistory") === "true" ? "Enabled" : "Disabled";
    document.getElementById("savedResponseTime").textContent = localStorage.getItem("responseTime");
    document.getElementById("savedPersonality").textContent = localStorage.getItem("personality");
}
