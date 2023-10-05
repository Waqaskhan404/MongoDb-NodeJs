const {MongoClient} =require("mongodb");
const url="mongodb://127.0.0.1:27017";


const client=new MongoClient(url);

const dbName='myDataBase';

// If we make all calls here like find in the one file   it will make confusion lets make different files for each call setup things

const dbConnection=async()=>{
    try{
    await client.connect();
    console.log("Connected Successfully to the server");
    const db=client.db(dbName);
    return db;
    }
    catch(error){
        console.error("Failed to connect to the server :",error)
    }
    
// We will make different file for different methods like insert,update,delete ,and find
    // const findResult=await collection.find().toArray();
    // console.log(findResult);
}

module.exports={dbConnection};
