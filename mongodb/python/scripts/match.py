from pymongo import MongoClient
from db import client
import pprint

 
# Accedemos a la base de datos
dbname=client['sample_airbnb']

# Coleccion a usar
propiedades=dbname['listingsAndReviews']

#Etapa 1. Buscar propiedades con precio mayor de 100
filtro={"$match": {"price":{"$gte":100}}}

#Etapa 2 Vamos a agrupar por tipo de Propiedad y averiguar el precio medio
grupo={"$group": {"_id": "$property_type","precio_medio": {"$avg":"$price"}}}

# Crear la tuberia
tuberia=[filtro,grupo]

# Lanzar el aggregate
resultados=propiedades.aggregate(tuberia)

# Visualizar el resultado
for elemento in resultados:
   # pprint.pprint(elemento)
    print(elemento['_id']+"  "+str(elemento['precio_medio']))