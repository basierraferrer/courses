from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

userDb = os.getenv('USER_DB')
pssDb = os.getenv('PSS_DB')
clusterUrl = os.getenv('CLUSTER_URL')
clusterName = os.getenv('CLUSTER_NAME')

# connection string
CONNECTION_ATLAS = "mongodb+srv://" + userDb + ":"+ pssDb +"@"+ clusterUrl +"/?retryWrites=true&w=majority&appName="+clusterName

# create instance
client = MongoClient(CONNECTION_ATLAS)