import React, { useState } from 'react'
import "../style/register.css"

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      username,
      email,
      password
    });
  };

  return (
    <div className="container">
      <h1 className="title">Register</h1>

      <form onSubmit={handleSubmit} className="form-data">

        <label>Username:</label>
        <input 
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register