/** @format */

// src/auth/Login.js

import { Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import Input from "./Input";
import "./Auth.css";

import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://your-api-endpoint/login", {
        email,
        password,
      });

      setUser(response.data.user);
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      setErrorMessage("An error occurred during login.");
    }
  };
  const handleRegister = async () => {
    try {
      await axios.post("https://your-api-endpoint/register", {
        email,
        password,
      });
      // ... (Weiterleitung oder Erfolgsmeldung wie im vorherigen Beispiel)
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
    }
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
                onChange={(ev) => setUser(ev.target.value)}
                id="name"
                type="text"
                value={setUser}
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
              onClick={variant === "login" ? handleLogin : handleRegister}>
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
};
export default Login;
