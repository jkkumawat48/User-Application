import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from  "react-router-dom"

const Header = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User Login Application</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/login">Login</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header