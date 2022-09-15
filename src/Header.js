import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from  "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User Login Application</Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavLink to="/home">Home</NavLink>
            <NavLink to="/features">Features</NavLink> */}
            {/* <NavLink to="/login">Login</NavLink> */}
            {/* <NavLink to="/contact">Contact</NavLink> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/features">
              Features
              </NavLink>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header