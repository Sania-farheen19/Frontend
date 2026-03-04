import React from 'react'
import "../style/landingPage.css"
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='navbar'>
        <h2 className='nav-logo'>Origin</h2>
         <ul className='nav-list'>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("products")}>Show products</li>

          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/register")}>Register</li>
          <li onClick={() => navigate("/login")}>Login</li>
        </ul>
      </nav>
    </div>
  )
}

export default LandingPage