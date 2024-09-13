import React from "react";
import Product from "./Common Componenets/Product.jsx";

const Home = ()=>{
    return(
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <Product />
            </div>
        </React.Fragment>
    )
}

export default Home