/** @format */

import React, { useState, useCallback } from "react";
import Input from "./Input";
import "./Auth.css";

import { Link } from "react-router-dom";
function Auth() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked!");
  };
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Sign up clicked!");
  };

  return (
    <div className="auth-container">
      <Link to="/">
        <nav className="auth-logo-container">
          <img src="/image/logo.png" alt="Logo" className="auth-logo" />
        </nav>
      </Link>
      <div className="auth-background"></div>
      <div className="auth-content">
        <div className="auth-form-container">
          <h2 className="auth-title">
            {variant === "login" ? "Sign in" : "Create an account"}
          </h2>
          <div className="auth-input-container">
            {variant === "register" && (
              <Input
                label="Username"
                onChange={(ev) => setUserName(ev.target.value)}
                id="name"
                type="text"
                value={userName}
              />
            )}
            <Input
              label="Email"
              onChange={(ev) => setEmail(ev.target.value)}
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Password"
              onChange={(ev) => setPassword(ev.target.value)}
              id="password"
              type="password"
              value={password}
            />

            <button
              className="auth-button"
              onClick={variant === "login" ? handleLogin : handleSignup}>
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            <p className="auth-toggle">
              {variant === "login"
                ? "First time using Netflix? "
                : "Already have an account?"}{" "}
              <span onClick={toggleVariant} className="auth-toggle-link">
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
