import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    const storedData = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("currentUser",JSON.stringify(storedData))

    if (
      storedData &&
      storedData.email === email &&
     atob(storedData.password) === password
    ) {
      if (storedData.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="page-container">
     <div className="form-container">
       <h1 className="form-title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">Login</button>
      </form>
     </div>
    </div>
  );
};

export default Login;
