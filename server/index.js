const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const cors = require("cors");
const User = require("./user");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Connect to database
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// create a post request to the register page

app.post("/Register", async (req, res) => {
  //get data from client side to the server side
  const { email, username, password } = req.body;

  // Hash the password to 10 round of salting
  // const hashedPassword = await bcrypt.hash(password, 10);

  // check for data in console
  console.log({ email, username, password });

  // Validate input fields
  if (!username || !email || !password) {
    return res.send({ error1: "Enter all the fields" });
  }

  // Check if email already exists
  const userExists = await User.exists({ email: email });
  if (userExists) {
    return res.send({ error2: "This email is already in use" });
  }

  // Create a new user
  const user = new User({
    username: username,
    email: email,
    password: password,
  });

  // Save the user to the database
  user
    .save()
    .then((user) => {
      return res.send({ message: "Registration successful" });
    })
    .catch((err) => {
      res.send({ error3: " something went wrong" });
    });
});

//creating route for user authentication and login

app.post("/Login", async (req, res) => {
  const { loginusername, loginpassword } = req.body;

  console.log({ loginusername, loginpassword });
  // Validate input fields
  if (!loginusername || !loginpassword) {
    res.send({ error1: "input the required data" });
  }
  try {
    const user = await User.findOne({ username: loginusername });
    const password = await User.findOne({ password: loginpassword });
    if (!user) {
      return res.send({ error2: "No user found, Kindly Register first" });
    } else if (user && password) {
      return res.send({ message: "User found and is authenticated" });
    } else {
      return res.send({ error3: "Password is incorrect" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Port to listen backend
app.listen(5000, (req, res) => {
  console.log("server running on port 5000");
});
