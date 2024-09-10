import React, { lazy } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Root_CSS.css'
import Header from './Common Componenets/Header.jsx'
import Home from './Home.jsx'
import AddProduct from './Common Componenets/AddProduct.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
 
export default App
