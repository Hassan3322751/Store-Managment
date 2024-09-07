import React, { useEffect, useState, useContext } from 'react'
import { getProducts } from '../Context/Context.jsx';
import '../CSS/Product.css'
import { Pagination, Spinner } from 'react-bootstrap';

const Product = (data) => {
    const [ products, setProducts ] = useState()
    const [ docsCount, setDocsCount ] = useState()
    const [ page, setPage ] = useState(1)
    console.log(getProducts)
    // const { 
    //     state: {Products},
    // } = getProducts();

    // console.log(Products)
    
    // useEffect(()=>{
    //     async function data(){
    //         await getProducts(page)
    //     }
    //     data()
    // }, [])
    

    let pags = [];
    let pages = Math.ceil(docsCount/9);
    for (let p = 1; p <= pages; p++) {
        pags.push(
          <Pagination.Item key={p} tabIndex={p} active={p === page} onClick={(e) => handlePagination(e)}>
            {p}
          </Pagination.Item>,
        );
    }
    
    const handlePagination = async(e) => {
        const page = e.target.tabIndex;
        e.target.active = page;
        setPage(page)
        await getProducts(page)
    }

    return (
        <React.Fragment>
        <div style={{width: '86%'}}>
            <div className="products-container">		
            {
                products ? (
                    products.map((curElm, index) => {
                        const { _id, title, price, quantity, image } = curElm; 
                        return(
                            <div className="product-card" data-category="home" key={index} id={_id}>   
                            <img src={image} loading="lazy" />               
                            <h2>{title}</h2>
                            <div className='d-flex justify-content-between'>
                                <p className='d-inline'>Price {price}rs</p> 
                                <p className='d-inline'>Qty {quantity}</p>
                            </div>
                        </div>
                    )
                })
            ) : (
                <div className='d-flex justify-content-center'>Loading.... <Spinner /></div>
            )}
            </div>

            <div className='d-flex justify-content-center'>
                <Pagination>
                    {pags}
                </Pagination>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Product