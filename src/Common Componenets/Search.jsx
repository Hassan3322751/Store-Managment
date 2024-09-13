import React, { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { Form } from 'react-bootstrap'
import { ProductsContext } from '../Context/Context';

const Search = () => {
  const { query, setQuery, getProducts, sortBy, filters, setFilters, setPage } = useContext(ProductsContext)

  const handleSearch = async(query) => {
    if(!query){
      setQuery(null);
      setPage(1)
      setFilters('')
      await getProducts(1, sortBy, null, filters)
    } else{
      setQuery(query);
      setPage(1)
      setFilters('')
      await getProducts(1, sortBy, query, '')
    }
  }
  return (
    <React.Fragment>
      <div style={{margin: '0px 8px'}}>
        <Form.Control type="input" placeholder="Search" className='d-inline searchBar' value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{border: 'none', borderBottom: '1px solid gray', borderRadius: '0px'}} 
        />

        <button className='d-inline searchBtn' onClick={() => handleSearch(query)}>
          <FaSearch color='primary'/>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Search