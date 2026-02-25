import React, { useState } from 'react'
import "../style/login.css"

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({email,password});

        

    }
  return (
    <div className='login-container'>
        <h1 className='login-title'>Login</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <label >Email:</label><input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}
          required />

           <label >Password:</label><input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}
          required />

          <button type="submit">Login</button>

        </form>
        
    </div>
  )
}

export default Login