const mongoose =require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    lastName:String
});

const UserModel=mongoose.model("Users",UserSchema);

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/myDataBase");
    console.log("Connected Successfully to Database");

    const newData= new UserModel({
        name:"Hameed",
        lastName:"Khan"
    });
    await newData.save();
    console.log("Data Added");

}

main();