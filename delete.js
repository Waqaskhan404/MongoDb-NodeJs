const {dbConnection}=require("./db");


async function main(){
    try{
        const db=await dbConnection();
        const collection=db.collection("Users");

        // const DeleteData=await collection.deleteOne({name:"Srk"},{$set:{name:"Delete",lastName:"testing"}});
        const DeleteData=await collection.deleteMany({name:"Fakhar"},{$set:{name:"Delete",lastName:"testing"}});

        console.log(`${DeleteData.deletedCount} data updated`);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}

main();