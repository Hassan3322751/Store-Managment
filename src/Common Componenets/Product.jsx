import React, { useContext } from 'react'
import './CSS/Product.css'

import { Pagination, Spinner } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import heartFill from '../../public/heart-fill-svgrepo-com.svg'

import { ProductsContext } from '../Context/Context.jsx';
import Sorting from './Sorting_Component/Sorting.jsx';


const Product = () => {
    const { products, docsCount, getProducts, page, setPage, sortBy, addToFav, query, filters } = useContext(ProductsContext)

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
        const curPage = e.target.tabIndex;
        e.target.active = curPage;
        setPage(curPage)
        console.log(filters + " Its filter in pages")
        await getProducts(curPage, sortBy, query, filters)
    }

    const handleFav = async(e) => {
        const id = e.target.id;
        await addToFav(id)
    }
    
    const handleFav1 = async(e) => {
        const id = e.target.id;
        await addToFav(id)
    }

    return (
        <React.Fragment>
        <div>
            <Sorting />
            <div className="products-container">		
            {
                products ? (
                    products.map((curElm, index) => {
                        const { _id, title, price, quantity, image, favourite } = curElm; 
                        return(
                            <div className="product-card" data-category="home" key={index} id={_id}>   
                            <div className='addFav'>
                                {
                                    favourite ? (
                                        <img className='favBtn' id={_id}
                                        src={heartFill} style={{color: 'red'}}  onClick={(e) => handleFav1(e)}/>
                                    ):(
                                        <FaRegHeart id={_id} className='favBtn'
                                        style={{color: 'red'}} onClick={(e) => handleFav(e)}/>
                                    )
                                }

                            </div>
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