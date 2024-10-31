from pymongo import MongoClient
from db import client
import pprint

# Accedemos a la base de datos
dbname=client['sample_airbnb']

# Coleccion a usar
propiedades=dbname['listingsAndReviews']

# Vamos a agrupar por tipo de Propiedad y averiguar el precio medio
grupo={"$group": {"_id": "$property_type","precio_medio": {"$avg":"$price"}}}

# Crear la tuberia
tuberia=[grupo]

# Lanzar el aggregate
resultados=propiedades.aggregate(tuberia)

# Visualizar el resultado
for elemento in resultados:
   # pprint.pprint(elemento)
    print(elemento['_id']+"  "+str(elemento['precio_medio']))