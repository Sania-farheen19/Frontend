import React from 'react'
import "../style/landingPage.css"
import { useNavigate } from 'react-router-dom'
import ProductList from './Products/ProductList';
import Hero from '../components/ui/Hero';
import Footer from '../components/ui/Footer';


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='navbar'>
        <h2 className='nav-logo'>Origin</h2>
         <ul className='nav-list'>
          
          <li onClick={() => navigate("/register")}>Register</li>
          <li onClick={() => navigate("/login")}>Login</li>
        </ul>
      </nav>
      <div>
        <Hero/>
        <ProductList/>
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage