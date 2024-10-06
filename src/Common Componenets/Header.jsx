import React, {useContext} from 'react';
import { ProductsContext } from '../Context/Context';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search';
import './CSS/Header.css';
import { FaRegHeart } from "react-icons/fa";

function Header() {
    const { setQuery, setFilters, setPage, getProducts, setSortBy } = useContext(ProductsContext);

    const handleClick = async() => {
        setQuery('')
        setFilters('')
        setPage(1)
        setSortBy([])
        await getProducts(1, [], null, '')
    }
    
    const filterFavourites = async(e) => {
        setFilters('favourite.true')
        setPage(1)
        setQuery(null)
        setSortBy([])
        await getProducts(1, [], null, 'favourite.true')
    }

return (
    <>
        <Navbar expand="lg" style={{boxShadow: '1px 1px 2px 1px grey', zIndex: '2'}}
        className={`custom-header w-100 bg-white position-sticky top-0`} >
            <Container className='headerNavBar' fluid>
                    <Link to='/' style={{color: 'primary'}}
                        onClick={() => handleClick()}
                    >
                        E-Store
                    </Link>

                    <div className='d-flex align-items-center'>
                        <Search />
                        <button className='searchBtn' onClick={(e) => filterFavourites(e)}>
                            <FaRegHeart className='favBtn' />
                        </button>
                        <Link to='/dashboard'>
                            <FaRegHeart className='favBtn' />
                        </Link>
                    </div>
            </Container>
        </Navbar>
    </>
)}

export default Header;