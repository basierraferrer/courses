from pymongo import MongoClient
from db import client

    # get the db to use
    dbname=client['course']

    # use or create a collection
    # dbname.billings
    billingCollection=dbname['billings']     
    #Document to insert
    bill_list=[{
        "code_billing": 2,
        "description": "This in an bill example 2",
        "total": 120,
        "products": ["tomato","apple","cucumber"]

    },
    {
        "code_billing": 3,
        "description": "This in an bill example 3",
        "total": 90,
        "products": ["apple","strawberry"]

    },

    ]
    # Insert document
    result=billingCollection.insert_many(bill_list)

    print(result)
    data=dbname.list_collection_names()

    for collection in collections:
        print(collection)
  