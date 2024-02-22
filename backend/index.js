const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routers/auth");
const userRoute = require("./routers/user");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL).then(
    () => {console.log("Connected to Database...");}
)
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth",authRoute);
app.use("/v1/user",userRoute);

app.listen(8000, () =>{
    console.log("Server is running");
})

