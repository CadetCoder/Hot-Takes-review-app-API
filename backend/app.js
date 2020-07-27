// MongoDB Name: cadetCoder

// MongoDB Password: bhQOa66y3q6lO1OF

const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const mongoose = require("mongoose");

const sauceRoutes = require("./routes/sauce");

const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://cadetCoder:bhQOa66y3q6lO1OF@cluster0-havww.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

// CORS error middleware
app.use((req, res, next) => {
  // * allows any request from any origin will be allowed to access API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("api/sauces", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Sauce created successfully!",
  });
});

//convert the body into useable JSON object. Receiving an object from the frontend.
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
