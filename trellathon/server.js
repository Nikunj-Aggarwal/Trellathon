const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const init = require("./models/index");
require('dotenv').config();
// const container = require("./di");



//Routes
// const userRoute = require("./routes/userRoute");


const app = express();
const port = process.env.PORT || 8000;


//Initialise DB and Tables
init.initDBAndTables();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use((req,res,next)=>{
    req.container = container.createScope();
    next();
});

// app.use("/auth", userRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
