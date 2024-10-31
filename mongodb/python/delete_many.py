from pymongo import MongoClient
from bson import ObjectId
from db import client
import pprint
 
# get to sample_mflix
dbname=client['course']

# get collection
collection=dbname['billings']

# document id to find 
document_to_find={ "total": {"$gt": 90} }


# find document
result=collection.delete_many(document_to_find)


# print result
pprint.pprint(result.deleted_count)