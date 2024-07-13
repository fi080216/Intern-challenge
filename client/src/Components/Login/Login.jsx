import React, { useState } from "react";
import "./Login.css";
import "../..//App.css";
import { Link, useNavigate  } from "react-router-dom";
import Axios from "axios";


//inport video from directory
import video from "../../assets/video (2).mp4";

//import logo from react-icons
import { FaUserShield } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

function Login() {
  //useState to hold our inputs

  const [loginusername, setloginUsername] = useState("");
  const [loginpassword, setloginPassword] = useState("");
  const navigateTo =  useNavigate()

  //Onclick we will get what user will enter into the form

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Sending request to Login the user:", {
      loginusername,
      loginpassword,
    });
    
       Axios.post("http://localhost:5000/Login", {
        loginusername: loginusername,
        loginpassword: loginpassword
      }).then((response)=>{
        console.log(response.data);

        if(response.data.error1 || response.data.error3 ){
          // direct the user to login to rectify the error
          navigateTo('/')

        }else if(response.data.error2){
          // direct the user to register page 
          navigateTo('/Register')

        }else{
          // direct the use to dashboard
          navigateTo('/Dashboard')
        }




      })
     

    
    
  };

  return (
    <div className="LoginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell products</h2>
            <p>Adopt the peace of nature! </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Doesn't have an account? </span>
            <Link to={"/Register"}>
              <button className="btn">Sign Up </button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <FaCanadianMapleLeaf className="icons" />
            <h3>Welcome Back</h3>
          </div>

          <form onSubmit={handleLogin} className="form grid">
            <span className="showMessage"></span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icons" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your Username"
                  onChange={(e) => {
                    setloginUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <RiLockPasswordFill className="icons" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setloginPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>
                Login
                <BiLogIn className="icon" />
              </span>
            </button>
          </form>

          <span className="forgotPassword">
            Forgot your Password ? <a href="/Dashboard">Click here</a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login;
