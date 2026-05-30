async function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    let chatBox = document.getElementById("chatBox");

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fetch response from Flask backend
    const response = await fetch('/get_response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();

    let botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = data.response;

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
}