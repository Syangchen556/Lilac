// Function to send user messageslov9ycyicututcucct
function sendMessage() {
    let userText = document.getElementById("userInput").value;
    if (userText.trim() === "") return;

    let chatOutput = document.getElementById("chatOutput");

    // Create user message bubble
    let userMessage = `
        <div class="chat-message user">
            <p class="chat-name">You</p>
            <div class="chat-bubble">${userText}</div>
        </div>
    `;
    chatOutput.innerHTML += userMessage;
    document.getElementById("userInput").value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;  // Scroll to bottom

    // Store message in search history
    addToHistory(userText);

    // Simulate bot response
    setTimeout(() => {
        let botResponse = `
            <div class="chat-message bot">
                <p class="chat-name">Lilac</p>
                <div class="chat-bubble">I'm still learning! 😊</div>
            </div>
        `;
        chatOutput.innerHTML += botResponse;
        chatOutput.scrollTop = chatOutput.scrollHeight;  // Scroll to bottom
    }, 1000);
}

// Handle Enter key for chat submission
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active"); // Toggle 'active' class for sidebar visibility
}

// Array to store search history
let searchHistory = [];

// Function to add a new search to history
function addToHistory(text) {
    if (!searchHistory.includes(text)) {
        searchHistory.unshift(text); // Add new search at the top
        if (searchHistory.length > 10) {
            searchHistory.pop(); // Keep only last 10 searches
        }
    }
    updateHistoryUI();
}

// Function to update the UI with search history
function updateHistoryUI() {
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; // Clear existing history

    searchHistory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => document.getElementById("userInput").value = item; // Click to reuse search
        historyList.appendChild(li);
    });
}

// Function to filter search history based on user input
function filterHistory() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let historyList = document.getElementById("historyList").children;

    for (let li of historyList) {
        li.style.display = li.textContent.toLowerCase().includes(searchText) ? "block" : "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the Log-in link and add event listener
    const loginButton = document.getElementById("loginLink");
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            window.location.href = "../login/main.html"; // Redirect to login page
        });
    }

    // Ensure the chatbot does not auto-redirect
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
        console.log("User not logged in. Staying on the chatbot page.");
    }
});




// document.addEventListener("DOMContentLoaded", function () {
//     const userEmail = localStorage.getItem("userEmail");

//     if (!userEmail) {
//         window.location.href = "../login/main.html"; // Redirect to login if not logged in
//     }

//     document.getElementById("logoutBtn").addEventListener("click", function () {
//         localStorage.removeItem("userEmail");
//         localStorage.removeItem("userPassword");
//         window.location.href = "../login/login.html"; // Redirect to main page
//     });
// });

// Modify sendMessage function to store searches
// Already handled by `addToHistory` inside `sendMessage`
