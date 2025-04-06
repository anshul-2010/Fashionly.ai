from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import traceback

app = Flask(__name__)
CORS(app)

# Configure Gemini API Key
genai.configure(api_key="your-gemini-app-key")

# Load the model (e.g., gemini-pro for text)
model = genai.GenerativeModel("models/thinking-exp")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"reply": "❗Please enter a message."})

    user_message = "You act as a fashion stylist. Please provide the details of the outfit, including the color, type of clothing, and any accessories. \n\n" + user_message + "Make you reply as concise as possible and only with respect to clothing and nothing else."     
    try:
        response = model.generate_content(user_message)
        bot_reply = response.text
        return jsonify({"reply": bot_reply})

    except Exception as e:
        print(f"Error: {e}")
        print("Error while calling Gemini API:")
        traceback.print_exc()
        return jsonify({"reply": "Sorry, there was an error connecting to the chatbot."})

if __name__ == "__main__":
    app.run(debug=True)
