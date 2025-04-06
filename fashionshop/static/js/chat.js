const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("chatSend");
const chatBody = document.getElementById("chatBody");

sendBtn.onclick = sendMessage;
chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  chatInput.value = "";

  try {
    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (!res.ok) {
      appendMessage("bot", "⚠️ Server error. Please try again.");
      return;
    }

    const data = await res.json();
    appendMessage("bot", data.reply || "🤖 No reply received.");
  } catch (error) {
    console.error("Fetch error:", error);
    appendMessage("bot", "⚠️ Network error. Could not reach the server.");
  }
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = "chat-message " + sender;

  if (sender === "bot") {
    // Convert markdown to HTML safely and clearly
    const markdownHTML = marked.parse(text);
    msg.innerHTML = `<div><strong>Bot:</strong><div class="bot-reply">${markdownHTML}</div></div>`;
  } else {
    msg.textContent = `You: ${text}`;
  }

  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}