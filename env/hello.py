from flask import Flask
from flask_restful import reqparse, Api, Resource
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('task')
class Message(Resource):
    def get(self):
        return {"message": 'Hello World'}
api.add_resource(Message, '/api/hello')

if __name__ == '__main__':
    app.run(debug=True, port = 8080)