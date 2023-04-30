from flask import Flask
import test


app = Flask(__name__)

@app.route('/predict')
def my_profile():
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)

