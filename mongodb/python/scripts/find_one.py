from pymongo import MongoClient
from bson import ObjectId
from db import client
import pprint
 
# get to sample_mflix
dbname=client['sample_mflix']

# get collection
movies=dbname['movies']

# document id to find 
document_to_find={"_id": ObjectId("573a1390f29313caabcd42e8")}


# find document
result=movies.find_one(document_to_find)


# print result
pprint.pprint(result['title'])
pprint.pprint(result['plot'])
pprint.pprint(result['cast'])