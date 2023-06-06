require("dotenv").config();
require("./db/connection");

const express = require("express");
const router = require("./routes/route");
const SenddummydatatoDB = require("./senddummytoDB");

const app = express();
app.use(router);



const port = process.env.PORT || 8003;
app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});

SenddummydatatoDB();