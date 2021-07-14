const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config({ path: "./.env" });

//route
app.use("/person", require("./Router/personRouter"));

//connect database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));
//create server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running on port", PORT)
);
