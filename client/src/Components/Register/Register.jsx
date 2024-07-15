import React, {useEffect, useState } from "react";
import "./Register.css";
import "../..//App.css";
import { Link, useNavigate } from "react-router-dom";

//import video from directory
import video from "../../assets/video (2).mp4";

//import logo from react-icons
import { FaUserShield } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Axios from "axios";

function Register() {
  //useState to hold our inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  ////showing message to the user during registration
  const [RegisterStatus, setRegisterStatus] = useState();
  const [registerStatusHolder, setregisterStatusHolder] = useState('message')

  //Onclick we will get what user will enter into the form

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("Sending request to register user:", {
      email,
      username,
      password,
    });
    try {
      Axios.post("http://localhost:5000/Register", {
        email: email,
        username: username,
        password: password,
      }).then((response) => {
        console.log(response.data);
        if (response.data.error1) {
          navigateTo("/Register");
          setRegisterStatus("Enter all the fields !")
        } else if(response.data.error2) {
          navigateTo("/Register");
          setRegisterStatus("This email is already registered")
        }else{
          navigateTo("/");
        }
      });
    } catch (err) {
      console.error("Request failed", err);
    }
  };



  useEffect(()=>{
    if(RegisterStatus){
      setregisterStatusHolder('showMessage')
      setTimeout(() =>{
        setregisterStatusHolder('message')

      }, 2000);
    }
  }, [RegisterStatus])




  return (
    <div className="RegisterPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell products</h2>
            <p>Adopt the peace of nature! </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Already have an account</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <FaCanadianMapleLeaf className="icons" />
            <h3>Register here </h3>
          </div>

          <form onSubmit={handleRegister} className="form grid">
          <span className={registerStatusHolder}>{RegisterStatus}</span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icons" />
                <input
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icons" />
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUsername(e.target.value);
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
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              
                Register
                <BiLogIn className="icon" />
              
            </button>
          </form>

          {/* <span className="forgotPassword">
                Already have an Account <a href="/">Login</a>
              </span> */}
        </div>
      </div>
    </div>
  );
}
export default Register;
