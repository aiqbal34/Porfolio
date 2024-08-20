from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib


app =  Flask(__name__)

CORS(app)

@app.route('/')
def send_email():
    data = request.get_json()
    From = data['from']
    to = data['to']
    subject = data['subject']
    body = data['body']
    email = Email(From, to, subject, body)
    try:
        email.send_email()
        return jsonify({'message': 'Email sent successfully'})
    except Exception as e:
        return jsonify({'message': 'Failed to send email', 'error': str(e)})
    
    
    
class Email:
    def __init__(self, From, to, subject, body):
        self.From = From
        self.to = to
        self.subject = subject
        self.body = body
    def __init__(self, data: dict):
        self.From = data['from']
        self.to = data['to']
        self.subject = data['subject']
        self.body = data['body']
        

    def send_email(self):
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login()
        server.sendmail(self.From, self.to, self.body)
        server.quit()
    
if __name__ == '__main__':
    app.run(debug=True)
    
    
#Wrte a person class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return f'{self.name} is {self.age} years old'