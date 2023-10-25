import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login(){    
    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="../images/amazon_black.jpg"
            />
            </Link>
        <div className="login__container">
            <h1>Sign-In</h1>
            <form>
            <h5>Email</h5>
            <input
            type="text"
            aria-required
        />

          <h5>Password</h5>
          <input
            type="password"
            aria-required
          />
          <Link to ="/">
            <button
              className="login__signInButton"
              type="submit"
              >
              Sign In
            </button>
          </Link>

          <p>
            By signing in you agree the Terms and Conditions of the Amazon fake
            clone. Please see our privacy notice and out cookies policy
          </p>
          <button className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
);
}

export default Login;