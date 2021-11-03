import React from 'react'
import '../../App.css'
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/travel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    
    const {AllContexts}=useAuth();
    const {user,logOut} = AllContexts;
    //  const {user,logOut}=AllContexts;
     const {displayName, photoURL}= user;
    return (
        <div>
         <Navbar style={{background:" linear-gradient(315deg, #537895 0%, #09203f 74%)"}} expand="lg">
            <Container>
                <Navbar.Brand className="text-white"  to="/home"> <img width='40px' src="https://i.ibb.co/tXYf56M/10476.png" alt="Global" /> <b>TravelBd</b> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} className="text-white nav-effect" to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} className="text-white nav-effect" to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} className="text-white nav-effect" to="/plans">Plan</Nav.Link>
                    <Nav.Link as={NavLink} className="text-white nav-effect" to="/contact">Contract</Nav.Link>
                    
                        { !user.displayName ?
                       (<>
                       
                        <Nav.Link as={NavLink}  className="text-white text-uppercase fw-bold nav-effect" to="/login">Log-in</Nav.Link>
                       </>):(
                        <>
                            <Nav.Link as={NavLink} className="text-white nav-effect" to="/mypackage">My package </Nav.Link> 

                            {/* <Nav.Link as={NavLink} className="text-white nav-effect" to="/update">Manage All Plan</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white nav-effect" to="/update">Add Plan</Nav.Link> */}

                                <NavDropdown  title={
                                    <img className="img__img" src={photoURL} alt="profile-img" style={{width: "40px",borderRadius: "50%",marginRight:'5px'}}/>
                                }>
                                    <div className="text-center">

                                    <h6>{displayName}</h6>

                                    <button onClick={logOut} className="btn btn-outline-danger fs-6 " alert='logOut succesfully'>
                                            <FontAwesomeIcon icon={faSignOutAlt}  /> Log Out
                                            </button>

                                    </div>
                                </NavDropdown>  
                            
                                <Nav.Link as={NavLink} className="text-white nav-effect" to="/admin">Admin Panel </Nav.Link> 

                        </>     
                       )
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header
