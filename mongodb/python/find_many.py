from pymongo import MongoClient
from db import client
import pprint
 
# get to db
dbname=client['sample_mflix']

# get collection
movies=dbname['movies']

# try to find documents with imbd rated higher than 7.5
query={ "imdb.rating": {"$gt": 7.5}  }

# find
results=movies.find(query)

# impimir resultado. Solo _id y nombre
for result in results:
    pprint.pprint(result['title'] + " "+ str(result["imdb"]["rating"]))
