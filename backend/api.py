import Flask 
import Flask_cors
import json
from json import jsonify


app =  Flask(__name__)

app = CORS(app)

app.route('/')
def hello_world():
    return jsonify({
        'message' : 'Hello World'
    })