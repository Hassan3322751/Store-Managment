import { React, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

const Context = ({ children }) => {
  const [ page, setPage ] = useState(1)
  const [ products, setProducts ] = useState()
  const [ docsCount, setDocsCount ] = useState()
  const [ sortBy, setSortBy ] = useState([]);
  const [ query, setQuery ] = useState(null);
  const [ filters, setFilters ] = useState('')

  //Gettig Products on the base of sorting(filter) or query or both  
  const getProducts = async (page, sortBy, query, filters) => {
    try {
    const url = `http://localhost:3005/api/products?page=${page}&sortBy=${sortBy}&q=${query}&filters=${filters}`
    const response = await axios.get(url , {
      headers:{
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      setProducts(response.data.products);
      setDocsCount(response.data.docsCount); //Docs Count To create pagination Btns
    }
  } catch (e) {
    console.log("Error while getting products " + e)
  }
};

//First Page Render with no Filter and Query
useEffect(()=>{   
  getProducts(1, [], null, '') //First Page Render with no Filter and Query
},[])

//To Add a Product in Favourites
const addToFav = async(id) => {
  try {
    const response = await axios.put(`http://localhost:3005/api/product?id=${id}`, {
      headers:{
        'Content-Type': 'application/json',
      }
    })    
    if (response.status === 200) {
        getProducts(page, sortBy, query, filters) //Updating Current Page Procuts State
      }  
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <ProductsContext.Provider value={{
      products, setProducts, docsCount, getProducts, page, setPage, sortBy, setSortBy, addToFav, 
      query, setQuery, filters, setFilters
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Context
export { ProductsContext }