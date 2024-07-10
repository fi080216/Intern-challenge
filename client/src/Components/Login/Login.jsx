import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

//inport video from directory
import video from "../../assets/video.mp4";

//import logo from react-icons
import { FaUserShield } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

function Login() {
  return (
    <div className="LoginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted></video>
          <div className="textDiv">
            <h2 className="title">Create and sell products</h2>
            <p>Adopt the peace of nature! </p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Account doesn't exist </span>

            <Link to={"/Register"}>
              <button className="btn">Sign Up </button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img
              src="https://images.pexels.com/photos/2115085/pexels-photo-2115085.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
            <h3>Welcome Back</h3>
            <div>
              <form action="" className="form grid"></form>
              <span>Login status will go here </span>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icons" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your Username"
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
                  />
                </div>
              </div>

              <button type="submit" className="btn flex">
                <span>
                  Login
                  <BiLogIn className="icon" />
                </span>
              </button>

              <span className="forgotPassword">
                Forgot your Password ? <a href="/Dashboard">Click here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
