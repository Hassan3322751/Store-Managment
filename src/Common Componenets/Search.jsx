import React, { useState, useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { ProductsContext } from '../Context/Context';

const Search = () => {
  const { setQuery, getProducts, filter } = useContext(ProductsContext)
  const [q, setQ] = useState();

  const handleSearch = async(query) => {
    if(!query){
      setQuery(null);
      await getProducts(1, filter, null)
    } else{
      setQuery(query);
      await getProducts(1, filter, query)
    }
  }
  return (
    <React.Fragment>
      <div className='m-auto'>
        <Form.Control type="input" placeholder="Search" className='d-inline' value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{border: 'none', borderBottom: '1px solid gray', borderRadius: '0px', width: '17vw'}} 
        />
        <button className='d-inline searchBtn' onClick={() => handleSearch(q)}>
          <FaSearch color='primary'/>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Search