import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios'

import './navigationBarClient.css'
import { API_URL } from '../../constants/api'

const NavigationBarClient = ({updateProducts}) => {

  const [search, setSearch] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault()
    if(search){
        const {data} = await axios.get(`${API_URL}/front/products?search=${search}`)
        updateProducts(data)
    }
  }
  
  return (
    <>
        <Navbar bg="light" expand="lg" style={{ height: "90px" }}>
            <Container>
                <Link to="/shop" style={{ textDecoration: "none", color: "#333", fontSize: 30, fontWeight: 500 }}>Front Office</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: '7rem' }}>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
                    </Form>
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link>
                            <img alt="profile_image" src="/assets/male_avatar.png" className='profileImage'/>
                        </Nav.Link>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">
                                <FontAwesomeIcon 
                                    icon={faCartShopping}
                                    style={{ marginRight: "7px", marginLeft: "3px"}}
                                />
                                <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>Cart</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="http://localhost:3000/">
                                <FontAwesomeIcon 
                                    icon={faRightFromBracket}
                                    style={{ marginRight: "7px" }}
                                />
                                <span style={{ textDecoration: "none", color: "#333" }}>Logout</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBarClient