# 👗 Fashionly AI – Your Personal Fashion Chatbot

Welcome to **Fashionly AI**, your AI-powered virtual fashion assistant. This chatbot helps users get style tips, outfit suggestions, and more — all through a sleek, interactive chat interface powered by Google Gemini Pro.It was build as a part of 24 hours GenAI Hackathon.

![Fashionly AI Screenshot](![image](https://github.com/user-attachments/assets/cfda8cb2-5420-487d-bdf4-49ddc3d01bb0))

---

## 🚀 Project Features

- 💬 Real-time chatbot UI (HTML + CSS + JS)
- 🧠 Backend AI using **Gemini Pro** (Google Generative AI)
- 🔄 Conversational memory for context-aware replies
- 🔗 Fully connected via Flask REST API
- 🌐 CORS enabled for cross-origin frontends

---

## 📁 Project Structure

```
fashionly-ai-chatbot/
│
├── app.py                  # Flask backend
├── templates/
│   └── index.html          # Main UI page (if using Flask rendering)
├── static/
│   ├── css/
│   │   └── chat.css        # Styles for the chatbox
│   └── js/
│       └── chat.js         # Frontend interaction logic
└── README.md               # Project documentation
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/anshul-2010/Fashionly.ai.git
cd Fashionly.ai
```

### 2. Install Python Dependencies

> 💡 Ensure Python 3.7+ is installed.

```bash
pip install flask flask-cors google-generativeai
```

### 3. Set Up Your API Key

Get your API key from [Google AI Studio](https://makersuite.google.com/) and set it in your code:

```python
import google.generativeai as genai
genai.configure(api_key="YOUR_API_KEY")
```

Or set it as an environment variable:
```bash
export GOOGLE_API_KEY="YOUR_API_KEY"
```

### 4. Run the Flask Server

```bash
cd fashionshop/templates/
python app.py
```

By default, the server runs at: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🌐 Frontend Setup

Use the provided HTML/CSS/JS for a beautiful embedded chatbot.

### Example `chat.js` POST request:
```js
const response = await fetch("/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message }),
});
```

Ensure your `chat.html` includes:
```html
<script src="js/chat.js"></script>
```

---

## 🧪 Sample Questions to Try

- "What should I wear to a summer wedding?"
- "Suggest an outfit for a beach party."
- "Are bell-bottoms in trend this year?"
- "How do I style a white oversized shirt?"

---

## 📸 Demo

If you’ve deployed it, add a link:
> 🌍 [Live Demo](https://drive.google.com/file/d/1eKOw3MQyzTjPNpyUniEgQdjEThZmSclI/view?usp=sharing)

---

## 🤝 Contributions

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT License – feel free to use and modify!

---
