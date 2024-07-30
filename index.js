const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const app = express();
const http = require("http");
const expressServer = http.createServer(app);


// Mongo DB Database Connection
let URI = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fbrulyl.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

// let URI = `mongodb://127.0.0.1:27017/${process.env.DATABASE_USERNAME}`;

let OPTION = {
  autoIndex: true,
};
mongoose
  .connect(URI, OPTION)
  .then(() => {
    console.log(">Mongoose Connection Successful 2");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server");
});

expressServer.listen(process.env.PORT || 5000, () => {
  console.log(">Server Ready on http://localhost:" + process.env.PORT);
});
