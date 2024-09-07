import React, { useEffect, useState } from "react";
import SideBar from "./Common Componenets/SideBar.jsx";
import Product from "./Common Componenets/Product.jsx";

const Home = ()=>{
    return(
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <SideBar />
                <Product />
            </div>
        </React.Fragment>
    )
}

export default Home