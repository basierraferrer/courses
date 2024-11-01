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
        const collection = dbName.collection('billings');
        // create query
        const query = { "total": { "$gt": 100 }};        
        // query to upd
        const queryUpd = { "$inc": { "total": 50 }}
        // insert document
        let result = await collection.updateMany(query, queryUpd);
        // print document updated count
        console.log(result.modifiedCount)
    } catch (error) {
        console.log("**__** ~ main ~ error:", error);        
    } finally {
        // close connection
        await client.close()
    }
}

main();