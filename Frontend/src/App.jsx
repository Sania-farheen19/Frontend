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
import AppRoutes from "./routes/AppRoutes.jsx"

const App = () => {

  return (
    <div>
      
     <AppRoutes/>
    </div>
  )
}

export default App