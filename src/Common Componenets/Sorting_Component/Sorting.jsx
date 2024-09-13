import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/Context.jsx'

import "./Sorting.css"
import { Form } from 'react-bootstrap'

const Sorting = () => {
    const { getProducts, setPage, setSortBy, query, filters } = useContext(ProductsContext)

    const handleOnchange = async (e) => {

        if(e.target.value === ''){
            setSortBy([])
            setPage(1)
            getProducts(1, [], null, filters)
        }

        let sortBy = []; 
        sortBy.push(e.target.value)

        setPage(1)
        setSortBy(sortBy)
        getProducts(1, sortBy, query, filters)
    }
  return (
    <React.Fragment>
        <div className='sort_container'>
            <span className='sort_title'>Result Products</span>
            
            <div className='selecor_container d-flex align-items-center'>
                <div>
                    <b>Sort by</b>
                </div>
                <div className='selector'>
                    <Form.Select aria-label="Default select example" onChange={(e) => handleOnchange(e)}>
                        <option value=''>No Sort</option>
                        <option value="price">Price Low to High</option>
                        <option value="-price">Price High to Low</option>
                        <option value="quantity">Quantity Low to High</option>
                        <option value="-quantity">Quantity High to Low</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Sorting