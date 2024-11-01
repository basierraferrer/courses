const { MongoClient, ServerApiVersion } = require('mongodb');

//load env file
process.loadEnvFile();
//get keys
userDb = process.env.USER_DB
pssDb = process.env.PSS_DB
clusterUrl = process.env.CLUSTER_URL
clusterName = process.env.CLUSTER_NAME

// create string connection
CONNECTION_ATLAS = `mongodb+srv://${userDb}:${pssDb}@${clusterUrl}/?retryWrites=true&w=majority&appName=${clusterName}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(CONNECTION_ATLAS, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = {
    client
}

