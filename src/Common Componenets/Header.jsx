import React, {useContext} from 'react';
import { ProductsContext } from '../Context/Context';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../CSS/Header.css';
import { FaRegHeart } from "react-icons/fa";

function Header() {
    const { setQuery, setFilter, setPage, getProducts } = useContext(ProductsContext);

    const handleClick = async() => {
        setQuery(null)
        setFilter([])
        setPage(1)
        await getProducts(1, [], null)
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

                    <nav className='d-flex align-items-center'>
                        <Link to='/'>
                            <Nav.Link href="/" className='text-dark navLinks'
                                onClick={() => handleClick()}
                            >
                                Home
                            </Nav.Link>
                        </Link>
                        <Link to='/add'>
                            <Nav.Link href='/' className='text-dark navLinks'>Terms</Nav.Link>
                        </Link>
                        <Link to='/privacy_policy'>
                            <Nav.Link href='/' className='text-dark navLinks'>Privacy</Nav.Link>
                        </Link>
                        <Link to='/contact_us'>
                            <Nav.Link href='/' className='text-dark navLinks'>Contact Us</Nav.Link>
                        </Link>
                    </nav>

                    <div className='d-flex align-items-center'>
                        <Search />
                        <button className='searchBtn'>
                            <FaRegHeart className='favBtn' />
                        </button>
                        {/* <button className='searchBtn'>
                            <GrCart className='cartBtn' />
                        </button> */}
                        <Link to={"/userProfile"}>
                            <Button variant="outline-primary profileBtn">
                                Profile
                            </Button>
                        </Link>
                    </div>
            </Container>
        </Navbar>
    </>
)}

export default Header;