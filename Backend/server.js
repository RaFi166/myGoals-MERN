const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const env = require("dotenv").config();


app.use(express.json());

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err.message));

//general route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//goal routes
app.use("/api/goals", require("./Routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
