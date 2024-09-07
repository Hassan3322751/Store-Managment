import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'

function Header() {
return (
    <>
        <Navbar expand="lg" style={{boxShadow: '1px 1px 2px 1px grey', zIndex: '2'}}
        className={`custom-header w-100 bg-white position-sticky top-0`} >
            <Container className='headerNavBar' fluid>
                    <Link to='/' style={{color: 'primary'}}>E-Store</Link>
                    <nav className='d-flex align-items-center'>
                        <Link to='/'>
                            <Nav.Link href="/" className='text-dark navLinks'>Home</Nav.Link>
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
                        <Link to={"/userProfile"}>
                            <Button variant="outline-primary" >
                                Profile
                            </Button>
                        </Link>
            </Container>
        </Navbar>
    </>
)}

export default Header;