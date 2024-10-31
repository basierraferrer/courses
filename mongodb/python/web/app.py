from flask import Flask, render_template, request, url_for, redirect
from pymongo import MongoClient
from bson.objectid import ObjectId
from db import client

app = Flask(__name__)

 
# Usamos db course para conectarnos
db = client.course
alumnos = db.alumnos

@app.route('/', methods=('GET', 'POST'))
def index():
      if request.method=='POST':
        nombre = request.form['nombre']
        apellidos = request.form['apellidos']
        edad = request.form['edad']
        sexo = request.form['sexo']
        alumnos.insert_one({'nombre': nombre, 'apellidos': apellidos,'edad': edad,'sexo': sexo})
        return redirect(url_for('index'))

      all_alumnos= alumnos.find()
      return render_template('index.html', alumnos=all_alumnos)

@app.post('/<id>/delete/')
def delete(id):
    alumnos.delete_one({"_id": ObjectId(id)})
    return redirect(url_for('index'))