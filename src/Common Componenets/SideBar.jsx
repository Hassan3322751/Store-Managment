import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const SideBar = () => {
  const filters = [
    {
      htmlFor: 'price.asc', label: 'Ascending', type: 'radio', name: 'Price', id: 'price',
    },
    {
      htmlFor: 'price.desc', label: 'Descending', type: 'radio', name: 'Price', id: '-price' ,
    },
    {
      htmlFor: 'title.asc', label: 'Ascending', type: 'radio', name: 'Title', id: 'title',
    },
    {
      htmlFor: 'title.desc', label: 'Descending', type: 'radio', name: 'Title', id: '-title',
    },
    {
      htmlFor: 'quantity.asc', label: 'Ascending', type: 'radio', name: 'Quantity', id: 'quantity',
    },
    {
      htmlFor: 'quantity.desc', label: 'Descending', type: 'radio', name: 'Quantity', id: '-quantity',
    },
  ]

  const handleFilters = (e) => {
    e.preventDefault();

    let filterQueries = []; 
    let filters = document.querySelectorAll('.filter');

    filters.forEach(filter =>  filter.checked === true ? filterQueries.push(filter.id.split('.')) : null )
    console.log(filterQueries)
  }

  const handleUncheck = (e) => {
    e.preventDefault();

    let filters = document.querySelectorAll('.filter');
    filters.forEach(filter =>  filter.checked = false )
  }

  return (
    <React.Fragment>
        <div style={{width: '14%', boxShadow: '0 0 10px #ccc', minHeight: '100vh'}} className='d-flex'>
          <div className='position-fixed'>

            <div className='products_filter d-flex flex-column'>
              {
                filters.map((curElm, index) => {
                  const {htmlFor, label, type, name, filter, id} = curElm;                  
                    return(
                      <div className='products_filter'>
                        {  index%2 === 0 ? <b>{name}</b> : null  }
                        
                        <div key={index}>
                          <label htmlFor={htmlFor}>{label}</label>
                          <input type={type} name={name} id={id} className='filter' />
                        </div>
                        
                        {  index%2 === 1 ? <br /> : null  }
                      </div>
                    )
                })
              }
            </div>

            <Button onClick={(e) => handleFilters(e)} className='d-block m-4'>
              Apply Filters
            </Button>
            <Button onClick={(e) => handleUncheck(e)}>
              Clear Filters
            </Button>
          </div>
        </div>
    </React.Fragment>
  )
}

export default SideBar