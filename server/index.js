const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const cors = require('cors')
const User = require('./user')
const bodyParser = require('body-parser')
const passport = require('passport')

// app.use(express)
app.use(cors())
app.use(bodyParser.json());

// Connect to database
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });



// create a post request to the register page


app.post('/Register', async (req,res)=>{
 
  
  //get data from client side to the server side
const { email, username, password } = req.body;

  // Hash the password to 10 round of salting
const hashedPassword = await bcrypt.hash(password, 10);


//  // check for data
console.log({email, username, hashedPassword})

 // Validate input fields
 if (!username || !email || !password) {
  // req.flash("err", "*All the fields are required !");
  // req.flash("name", username);
  // req.flash("email", email);
  return res.redirect("/register");
}

// Check if email already exists
const userExists = await User.exists({ email: email });
if (userExists) {
  // req.flash("err", "*Email already exists !");
  // req.flash("name", name);
  // req.flash("email", email);
  return res.redirect("/register");
}



// Create a new user
const user = new User({
  username: username,
  email: email,
  password: hashedPassword,
});

// Save the user to the database
user
  .save()
  .then((user) => {
    return res.redirect("/login");
  })
  .catch((err) => {
    // req.flash("err", "Something went wrong !");
    return res.redirect("/register");
  });
 

})

app.post('/', (req, res) =>{

  const { username, password } = req.body;

      // Validate input fields
      if (!username || !password) {
        // req.flash("err", "*Enter the required field ");
        return res.redirect("/");
      }

      passport.authenticate("local", (err, user, info) => {
        if (err) {
          // req.flash("err", info.message);
          return next(err);
        }
        if (!user) {
          // req.flash("err", info.message);
          return res.redirect("/");
        }
        req.logIn(user, (err) => {
          if (err) {
            // req.flash("err", info.message);
            return next(err);
          }
          // return res.redirect(_getRedirectUrl(req));
        });
      })(req, res, next);
    

})












// Port to listen backend
app.listen(5000, (req, res) => {
  console.log("server running on port 5000");
});
