from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import traceback

app = Flask(__name__)
CORS(app)

# Configure Gemini API Key
genai.configure(api_key="your-gemini-api-key")

# Load the model (e.g., gemini-pro for text)
model = genai.GenerativeModel("models/gemini-1.5-flash")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

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
