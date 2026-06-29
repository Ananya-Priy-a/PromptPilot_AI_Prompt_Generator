from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()

app = Flask(__name__)
CORS(app)


client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY")
)


@app.route("/generate", methods=["POST"])
def generate():

    data = request.json

    prompt = data.get("prompt")
    model = data.get("model", "fast")

    if not prompt:
        return jsonify({
            "error": "Prompt required"
        }), 400

    model_options = {
    "fast": "openai/gpt-4o-mini",
    "balanced": "google/gemma-4-26b-a4b-it:free",
    "deep": "openai/gpt-oss-120b:free"
    }


    try:

        selected_model = model_options.get(model, model_options["fast"])
        result = client.chat.completions.create(
        model=selected_model,

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
        answer = result.choices[0].message.content


        return jsonify({
            "response":answer
        })


    except Exception as e:

        return jsonify({
            "error":str(e)
        }),500



if __name__=="__main__":
    app.run(port=5000, debug=True)