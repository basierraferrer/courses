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
        const collection = dbName.collection('ventas');
        // create venta obj
        const sell1 = {
            cod_sell : 100,
            name: 'Cliente 1',
            address: 'Calle falsa 123',
            billDate: new Date(),
            total: 200
        }
        // insert document
        let result = await collection.insertOne(sell1);
        console.log(result.insertedId)
    } catch (error) {
        console.log("**__** ~ main ~ error:", error);        
    } finally {
        // close connection
        await client.close()
    }
}

main();