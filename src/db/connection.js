require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.URL;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("Database Connected - OnlineMongoDB"))
.catch((error)=> console.log(error.message));