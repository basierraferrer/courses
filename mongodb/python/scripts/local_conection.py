from pymongo import MongoClient
# conexion
CONEXION_LOCAL = "mongodb://admin1:kireti@localhost"

# usamos MongoCliente
cliente = MongoClient(CONEXION_LOCAL)

# creamos la db
dbname=cliente['db1']

colecciones=dbname.list_collection_name()
print(colecciones)
