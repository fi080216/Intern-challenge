import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


import video from '../../assets/video.mp4'


function Login() {
  return (
    <div className="LoginPage flex">
      <div className="container flex">
        <div className="videoDiv">
            <video src= {video} autoPlay muted ></video>
            <div className="textDiv">
                <h2 className="title">Create and sell products</h2>
                <p>Adopt the peace of nature! </p>
            </div>
            <div className="footerDiv flex">
                <span className="text">Account doesn't exist </span>

               <Link to={'/Register'}>
               <button className="btn">Sign Up </button>
               </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src='https://images.pexels.com/photos/2115085/pexels-photo-2115085.jpeg?auto=compress&cs=tinysrgb&w=600' alt="image" />
                <h3>Welcome Back</h3>
                <div>
                    <form action="" className="form grid"></form>
                    <span>Login status will go here </span>
                    <div className="inputDiv">

                    </div>

                </div>
            </div>
        </div>


      </div>
    </div>
  );
}
export default Login;
