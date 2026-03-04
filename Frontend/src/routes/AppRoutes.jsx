import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login'
import Register from '../pages/Register'

import LandingPage from '../pages/LandingPage';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import UserDashboard from '../pages/Dashboard/UserDashboard';

import AddProduct from "../pages/Products/AddProduct";
import DeleteProduct from "../pages/Products/DeleteProduct";
import EditProduct from "../pages/Products/EditProduct";
import ProductList from "../pages/Products/ProductList";

import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
<Route path="/" element={<LandingPage/>} />
       
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/user-dashboard" element={<UserDashboard />} />
{/* products routes */}
    <Route path="/products" element = {<ProductList/>}/>
    <Route path="/products/add" element = {<AddProduct/>}/>
    <Route path="/products/edit:id" element = {<EditProduct/>}/>
    <Route path="/products/delete:id" element = {<DeleteProduct/>}/>
</Routes>
  )
}

export default AppRoutes