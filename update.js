const {dbConnection}=require("./db");


async function main(){
    try{
        const db=await dbConnection();
        const collection=db.collection("Users");
       
        // const updateData=await collection.updateOne({name:"Ammad"},{$set:{name:"Janbaz",lastName:"afridi"}});
        const updateData=await collection.updateMany({name:"updateMany"},{$set:{name:"Srk",lastName:"Fan"}});

        console.log(`${updateData.modifiedCount} data updated`);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}

main();