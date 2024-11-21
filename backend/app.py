from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)


# retrieve the API_Token for OpenAI
token = os.getenv("API_TOKEN")
openai.api_key = token

@app.route('/summarize', methods=['POST'])
def summarize_text():
    # Get text input from the request
    data = request.json
    text = data.get('text')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that summarizes text concisely."},
                {"role": "user", "content": text}
            ],
            max_tokens=100,
            temperature=0.7
        )
        # print(response)
        summary = response.choices[0].message.content.strip()
        return jsonify({"summary": summary})
    except openai.OpenAIError as e:
        print(f"OpenAI API error: {str(e)}")
        return jsonify({"error": "Error contacting OpenAI API"}), 500
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

