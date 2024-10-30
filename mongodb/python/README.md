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

Ya teniendo listo los modulos podemos empezar a relaizar pruebas con cada archivo `.py` del proyecto 

```bash
python3 local_conection.py
```