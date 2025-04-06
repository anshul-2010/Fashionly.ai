document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("chatSend");
    const chatInput = document.getElementById("chatInput");
  
    sendButton.addEventListener("click", sendMessage);
    chatInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendMessage();
    });
  
    async function sendMessage() {
      const message = chatInput.value.trim();
      console.log("Sending:", message);
      if (message === "") return;
  
      appendMessage("user", message);
      chatInput.value = "";
  
      try {
        const response = await fetch("/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });
  
        const data = await response.json();
        console.log("Bot response:", data);
        appendMessage("bot", data.reply || "🤖 Hmm, something went wrong.");
      } catch (err) {
        appendMessage("Fetch error:", err);
        appendMessage("bot", "⚠️ Error: Unable to connect to the server.");
      }
    }
  
    function appendMessage(sender, text) {
      const chatBody = document.getElementById("chatBody");
      const msg = document.createElement("div");
      msg.className = "chat-message " + sender;
      msg.innerText = text;
      chatBody.appendChild(msg);
      msg.scrollIntoView({ behavior: "smooth" });
    }
  }); 