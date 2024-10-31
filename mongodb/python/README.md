# MONGO

## Getting started

Para iniciar el proyecto debes crear el entorno virtual python

```bash
python3 -m venv mongo   
``` 

luego activar el env de python

```bash
source mongo/bin/activate
```

Una vez activado veras que la terminal al inicio del path actual aperece (mongo)

```bash
(mongo) userName python %
```

Ahora se debe instalar los modulos pymongo, python-dotenv

```bash
python3 -m pip install pymongo python-dotenv
```

Ahora debes crear el file `.env` con las variables

```text
USER_DB = [userName]
PSSW_DB = [password]
```
## scripts
Ya teniendo listo los modulos podemos empezar a relaizar pruebas con cada archivo `.py` del folder scripts 

```bash
python3 scripts/local_conection.py
```
## web
El folder web es un pequeño ejemplo de implelemntación web con python y pymongo para ejecutarlo debes instalar los moudles anteriormente mencionados
adicionalmente debes instalar `flask`

```bash
python3 -m pip install Flask
```

Para comprobar que se instalo correctamente ejecuta el siguiente comando:

```bash
pip list | grep Flask
```

Ahora debes ingresar al folder web y ejecutar en la terminal lo siguiente

```bash
export FLASK_APP=app
export FLASK_ENV=development
```
Ya para ejecutar el proyecto debes ejecutar el comando

```bash
flask run
```

Si todo va bien el proyecto debe estar disponible en la ruta [http://localhost:5000](http://localhost:5000)