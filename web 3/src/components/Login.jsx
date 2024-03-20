import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import leaf from "../assets/leaf.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "test@test.com" && password === "password") {
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="login">
      <img src={leaf} alt="logo" />
      <p className="mulish-regular">We are Electric</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Login
        </button>
        <p className="forgot-password">Forget Password</p>
      </form>
    </div>
  );
};

export default Login;
