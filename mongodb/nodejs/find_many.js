// import mongo client
const {client} = require('./db');


const main = async ()=> {
    try {
        //open connection with mongo
        await client.connect();
        console.log('Connection successfully to ATLAS');
        // get db
        const dbName = client.db('sample_mflix');
        // get ventas collection
        const collection = dbName.collection('movies');
        // create venta obj
        const query = { "imdb.rating": {"$gt": 7.5}  }
        // insert document
        let result = await collection.find(query);
        // map data result
        for await (const item of result){
            console.log(item['title']);
        }

    } catch (error) {
        console.log("**__** ~ main ~ error:", error);        
    } finally {
        // close connection
        await client.close()
    }
}

main();