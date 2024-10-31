from pymongo import MongoClient
from bson import ObjectId
from db import client
import pprint

print(client)

# get to db
dbname=client['sample_mflix']

# get collection
movies=dbname['movies']

# try to find documents with imbd rated higher than 7.5
query={ "imdb.rating": {"$gt": 7.5} }

# create a new fild called prevReated with the info of rating
queryUpd = { "$set": { "imdb.prevRated": "$imdb.rating" }}

# update
result=movies.update_many(query, queryUpd)

pprint.pprint(result.matched_count)
pprint.pprint(result.modified_count)

# data updated
pprint.pprint(movies.find_one(query))