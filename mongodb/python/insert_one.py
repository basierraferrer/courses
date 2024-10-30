from pymongo import MongoClient
from db import client
 
# get the db to use
dbname=client['course']

# use or create a collection
# dbname.billings
billingCollection=dbname['billings']   
# document to insert
bill1={
    "code_billing": 1,
    "description": "This is an example",
    "total": 100,
    "products": ["tomato","pear","lemons"]
}

# Insert document
result=billingCollection.insert_one(bill1)

# print the insert document
print(result)

# get the collections of db
collections=dbname.list_collection_names()

# print the collection list
print(collections)
for collection in collections:
    print(collection)
