const {dbConnection}=require("./db");


async function main(){
    try{
        const db=await dbConnection();
        const collection=db.collection("Users");
        const data=[
            {name:"Hammad",
            lastName:"Saeed"},
            {name:"Fakhar",
            lastName:"Zaman"}
        ];
        const inserData=await collection.insertMany(data);
        console.log(`${inserData.insertedCount} data inserted`);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}

main();