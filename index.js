const {MongoClient} =require("mongodb");
const url="mongodb://127.0.0.1:27017";


const client=new MongoClient(url);

const dbName='myDataBase';

async function main(){
    await client.connect();
    console.log("Connected Successfully to the server");
    const db=client.db(dbName);
    const collection=db.collection("Users");

    const findResult=await collection.find().toArray();
    console.log(findResult);
}

main();