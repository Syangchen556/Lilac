// Function to handle customization form submission
document.getElementById("customizationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const userOccupation = document.getElementById("userOccupation").value;
    const botTone = document.getElementById("botTone").value;

    if (userName && userOccupation && botTone) {
        // Save user data and bot tone preference
        localStorage.setItem("userName", userName);
        localStorage.setItem("userOccupation", userOccupation);
        localStorage.setItem("botTone", botTone);

        // Show personalized greeting and chat interface
        document.getElementById("customizationModal").style.display = "none";
        document.getElementById("chatContainer").style.display = "block";
        document.getElementById("personalizedGreeting").textContent = `Hello, ${userName}! I'm here to assist you as a ${userOccupation}. My tone is ${botTone}. How can I help you today?`;

        // Show Save Changes button after the chat appears
        document.getElementById("saveChangesBtn").style.display = "inline-block";
    }
});

// Function to send a message
function sendMessage() {
    const userText = document.getElementById("userInput").value;
    if (userText.trim() === "") return;

    const chatOutput = document.getElementById("chatOutput");

    // Create user message bubble
    const userMessage = `
        <div class="chat-message user">
            <p class="chat-name">You</p>
            <div class="chat-bubble">${userText}</div>
        </div>
    `;
    chatOutput.innerHTML += userMessage;
    document.getElementById("userInput").value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Simulate bot response based on the tone selected
    setTimeout(() => {
        let botResponse = '';
        const botTone = localStorage.getItem("botTone");
        if (botTone === "friendly") {
            botResponse = `Hey there! 😊 How can I help you today?`;
        } else if (botTone === "formal") {
            botResponse = `Greetings. How may I assist you today?`;
        } else {
            botResponse = `Yo! What's up? How can I help?`;
        }

        const botMessage = `
            <div class="chat-message bot">
                <p class="chat-name">Lilac</p>
                <div class="chat-bubble">${botResponse}</div>
            </div>
        `;
        chatOutput.innerHTML += botMessage;
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000);
}

// Handle Enter key for chat submission
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Go back to customization form
function goBackToChatbot() {
    document.getElementById("chatContainer").style.display = "none";
    document.getElementById("customizationModal").style.display = "block";
    document.getElementById("saveChangesBtn").style.display = "none";
}

// Save changes and update the chat interface with the new name/occupation/tone
function saveChanges() {
    const userName = document.getElementById("userName").value;
    const userOccupation = document.getElementById("userOccupation").value;
    const botTone = document.getElementById("botTone").value;

    if (userName && userOccupation && botTone) {
        // Save new data to localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userOccupation", userOccupation);
        localStorage.setItem("botTone", botTone);

        // Redirect to Lilac's page (Main Chatbot page)
        window.location.href = "../lilac/lilac.html";
    }
}
