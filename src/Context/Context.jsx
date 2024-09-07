import { createContext, useReducer, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

const Context = ({ children }) => {
  const [state, setState] = useState()
  
  useEffect(()=>{
    async function getData() {   
      const getProducts = async (page) => {
        try {
        const response = await axios.get(`http://localhost:3000/api/products?page=${page}`, {
          headers:{
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          console.log(response.data.products);
          setState(response.data.products);
          }
        } catch (e) {
          console.log("Error while getting products " + e)
        }
      };
      await getProducts()
    }
    getData()
  },[])
    
  return (
    <ProductsContext.Provider value={{
      // state, dispatch
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const getProducts = ()=>{
  return useContext(ProductsContext);
}

export default Context