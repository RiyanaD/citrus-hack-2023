from flask import Flask, render_template, request, jsonify
app = Flask(__name__, static_url_path='', static_folder='src')

# app = Flask(__name__)

# @app.route('/api/data')
# def get_data():
#     data = {'message': 'This is data from the Flask API.'}
#     return jsonify(data)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)