// import mongo client
const {client} = require('./db');


const main = async ()=> {
    try {
        //open connection with mongo
        await client.connect();
        console.log('Connection successfully to ATLAS');
        // get db
        const dbName = client.db('course');
        // get ventas collection
        const collection = dbName.collection('alumnos');
        // create query
        const query = { edad: { $eq: "15" }};
        // insert document
        let result = await collection.deleteMany(query);
        console.log(result.deletedCount);
    } catch (error) {
        console.log("**__** ~ main ~ error:", error);        
    } finally {
        // close connection
        await client.close()
    }
}

main();