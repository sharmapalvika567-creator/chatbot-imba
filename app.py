from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.get_json()
    user_message = data.get("message", "")
    message_lower = user_message.lower()

    if "hello" in message_lower:
        bot_response = "Hello My sweetheart"
    elif "name" in message_lower:
        bot_response = "I am Reman ur bhondu bandar"
    else:
        bot_response = f"A cute person said: {user_message}"

    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)