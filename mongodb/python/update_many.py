from pymongo import MongoClient
from bson import ObjectId
from db import client
import pprint

# get to db
dbname=client['sample_mflix']

# get collection
movies=dbname['movies']

# try to find documents with imbd rated higher than 7.5
qquery={ "imdb.rating": {"$gt": 7.5} }

# we will change the rating  but keep the prevRating
# The idea is to subtract 1.2 of the current value of rating
queryUpd = { "$set": { "imdb.rating":  }}

# update
result=movies.update_one(query, queryUpd)

pprint.pprint(result.matched_count)
pprint.pprint(result.modified_count)

# data updated
pprint.pprint(movies.find_one(query))