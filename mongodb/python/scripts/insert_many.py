from pymongo import MongoClient
from db import client

    # get the db to use
dbname=client['course']

    # use or create a collection
    # dbname.billings
billingCollection=dbname['billings']     
    #Document to insert
bill_list=[{
        "code_billing": 4,
        "description": "This in an bill example 4",
        "total": 120,
        "products": ["tomato","apple","cucumber"]

    },
    {
        "code_billing": 5,
        "description": "This in an bill example 5",
        "total": 90,
        "products": ["apple","strawberry"]

    },

    ]
    # Insert document
result=billingCollection.insert_many(bill_list)

pprint.pprint(result.insert_count)
  