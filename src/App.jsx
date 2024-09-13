import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Root_CSS.css'
import Header from './Common Componenets/Header.jsx'
import Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
 
export default App
