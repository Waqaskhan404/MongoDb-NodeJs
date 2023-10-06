const express=require("express");
const mongoose=require("mongoose");
// For Local DataBase 
// mongoose.connect("mongodb://localhost:27017/myDataBase");

// For Atlas Connection || on Server DataBase
mongoose.connect("mongodb+srv://hammadprince404:test1234@cluster0.d5rquua.mongodb.net/?retryWrites=true&w=majority");

const app=express();
app.use(express.json());

const BookSchema=new mongoose.Schema({
    title:String,
    author:String,
    age:Number
});

const Books=mongoose.model("Books",BookSchema);



app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>");
})

// get All Books
app.get("/books",async(req,res)=>{
    try{
       const books=await Books.find();
       res.json(books);
    }
    catch(err){
        console.log(err)
        res.status(500).json("Internal Server Error");
    }
});

// Create New Book
app.post("/books",async(req,res)=>{
    try{
        const {title,author,age}=req.body;
       const newBook=new Books({title,author,age});
       await newBook.save();
       res.status(201).json(newBook);
    }
    catch(err){
        console.log(err)
        res.status(500).json("Internal Server Error");
    }
});

// Update Book

app.put("/books/:id",async(req,res)=>{
        const {id}=req.params;
        const {title,author,age}=req.body;
       const updateBook=await Books.findByIdAndUpdate(id,{title,author,age});
       res.json(updateBook);
});



// Delete A Book
app.delete("/books/:id",async(req,res)=>{
    const {id}=req.params;
   const deleteBook=await Books.findByIdAndRemove(id);
   res.sendStatus(204);

});






app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})