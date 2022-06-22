import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTShirt, faCertificate, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import './navigationBar.css'

const NavigationBar = () => {
  return (
    <>
        <Navbar bg="light" expand="lg" style={{ height: "90px" }}>
            <Container >
                <Link to="/" style={{ textDecoration: "none", color: "#333", fontSize: 30, fontWeight: 500 }}>Back Office</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link>
                            <img alt="profile_image" src="/assets/male_avatar.png" className='profileImage'/>
                        </Nav.Link>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">
                                <FontAwesomeIcon 
                                    icon={faUser}
                                    style={{ marginRight: "7px", marginLeft: "3px"}}
                                />
                                <Link to="/users" style={{ textDecoration: "none", color: "#333" }}>Users</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                <FontAwesomeIcon 
                                    icon={faTShirt}
                                    style={{ marginRight: "4px" }}
                                />
                                <Link to="/products" style={{ textDecoration: "none", color: "#333" }}>Products</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                <FontAwesomeIcon 
                                    icon={faCertificate}
                                    style={{ marginRight: "7px" }}
                                />
                                <Link to="/categories" style={{ textDecoration: "none", color: "#333" }}>Categories</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                <FontAwesomeIcon 
                                    icon={faRightFromBracket}
                                    style={{ marginRight: "7px" }}
                                />
                                <Link to="/logout" style={{ textDecoration: "none", color: "#333" }}>Logout</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar