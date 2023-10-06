const express=require("express");
const app=express();
const {dbConnection}=require("./db");
app.use(express.json());

// get form MongoDB || Read From MongoDB
app.get("/",async(req,res)=>{
    // res.json({name:"Waqas"})
    try{
    const db=await dbConnection();
        const collection=db.collection("Users");
        const findResult=await collection.find().toArray();
        console.log(findResult);
        res.json(findResult)
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}
)

// Post to MongoDB || Create in MongoDB
app.post("/users",async(req,res)=>{
    try{
        const name=req.body.name;
        const lastName=req.body.lastName;
    const db=await dbConnection();
        const collection=db.collection("Users");
        const insertResult=await collection.insertOne({name:name,lastName:lastName});
        console.log(insertResult,"data inserted");
        res.json(insertResult);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}
)

// Put to MongoDB || Update In MongoDB

app.put("/users/:name",async(req,res)=>{
    try{
        const name=req.params.name;
    const db=await dbConnection();
        const collection=db.collection("Users");
        const updatedResult=await collection.updateOne({name:name},{$set:req.body});
        console.log(updatedResult,"data updated");
        res.json(updatedResult);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}
)

// Delete from MongoDB || Delete In MongoDB


app.delete("/users/:name",async(req,res)=>{
    try{
        const name=req.params.name;
    const db=await dbConnection();
        const collection=db.collection("Users");
        const deleteResult=await collection.deleteOne({name:name},{$set:req.body});
        console.log(deleteResult,"data deleted");
        res.json(deleteResult);
    }
    catch(error){
        console.error("Failed to connect to the server :",error);
    }
}
)



app.listen(3000,()=>{
    console.log("Server is running on Port 3000")
});