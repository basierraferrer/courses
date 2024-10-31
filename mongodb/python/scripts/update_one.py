from pymongo import MongoClient
from bson import ObjectId
from db import client
import pprint

# get to db
dbname=client['sample_mflix']

# get collection
movies=dbname['movies']

# try to find documents with imbd rated higher than 7.5
query={ "_id": ObjectId("573a1390f29313caabcd42e8")}

# original title: The Great Train Robbery
# You can change the title of the movie to test the update_one
queryUpd = { "$set": { "title": "The Great Train Robbery Express" }}

# update
result=movies.update_one(query, queryUpd)

pprint.pprint(result.matched_count)
pprint.pprint(result.modified_count)

# data updated
pprint.pprint(movies.find_one(query))