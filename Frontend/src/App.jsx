import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import "./App.css"
import "./index.css"
import Login from './pages/Login'
import Home from './pages/LandingPage';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';

const App = () => {

  return (
    <div>
      
      <Routes>
      <Route path="/" element={<LandingPage/>} />
       
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
    </div>
  )
}

export default App