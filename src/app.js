require("dotenv").config();
require("./db/connection");


const express= require("express")
const mongoose= require("mongoose")
const router= require("./routes/route");
const SenddummydatatoDB = require("./senddummytoDB");

// STEP 1 : creating app 
const app = express()




//STEP :3 using the router
app.use(router)

// STEP 2 setting port for app
const port= process.env.PORT || 9095 ;
app.listen(port, ()=>{
    console.log(`Server Started   ${port}`);
    

})


//sending dummy data to DB by calling functin
SenddummydatatoDB();