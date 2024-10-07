import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Common Componenets/CSS/Root_CSS.css'

import Header from './Common Componenets/Header.jsx'
import Home from './Home.jsx'
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import AddProduct from "./Pages/AddProduct/AddProduct.jsx";
import Login from "./Pages/Login/login.jsx";
import AdminProducts from "./Pages/AdminProducts/AdminProducts.jsx";
import AuthRoute from "./Common Componenets/AuthRoute/AuthRoute.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <Dashboard />
                </AuthRoute>
              }
            />
            <Route
              path="/addProduct"
              element={
                <AuthRoute>
                  <AddProduct />
                </AuthRoute>
              }
            />
            <Route
              path="/editProduct/:productId"
              element={
                <AuthRoute>
                  <AddProduct />
                </AuthRoute>
              }
            />
            <Route
              path="/adminProducts"
              element={
                <AuthRoute>
                  <AdminProducts />
                </AuthRoute>
              }
            />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
 
export default App
