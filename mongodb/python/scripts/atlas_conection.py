from pymongo import MongoClient
# Connection string
CONNECTION_ATLAS = "mongodb+srv://dev:Kireti@clustercurso.7qirb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCurso"

# create instance
client = MongoClient(CONNECTION_ATLAS)

# create or use db
dbname=client['sample_mflix']

# get the collections name
collections = dbname.list_collection_names()
print(collections)
