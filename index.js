const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json({name:"Waqas"})
})


app.listen(3000,()=>{
    console.log("Server is running on Port 3000")
});