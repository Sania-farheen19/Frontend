import React from 'react'
import ProductList from '../Products/ProductList'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const AdminDashboard = () => {
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user?.role !== "admin") {
            return <Navigate to="./login"/>    
  }
  
   
  }, [])
  
  return (
    <div >
      <h1>Admin Dashboard</h1>
      <div>
      <ProductList/>
    </div>
    </div>
  )
}

export default AdminDashboard