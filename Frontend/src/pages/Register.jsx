import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import "../style/register.css"

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
      ;

   const user = {
    username,
    email,password:btoa(password),
    role: email === "admin@origin.com" ? "admin" : "user"
   }

   localStorage.setItem("user",JSON.stringify(user));
   alert("Registerd Successfully");
   navigate("/login")
  };

  return (
    <div className="page-container">
      <div className='form-container'>
        <h1 className="form-title">Register</h1>

      <form onSubmit={handleSubmit} className="form">

        <label>Username:</label>
        <input 
          type="text"
          value={username}
          placeholder="Enter username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type="email"
          value={email}
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type="password"
          value={password}
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='btn' type="submit">Register</button>

      </form>
      </div>
    </div>
  )
}

export default Register