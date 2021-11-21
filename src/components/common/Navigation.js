import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="danger" expand="lg" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">CRUD Café</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/productos" className="nav-link">Productos</Link>
            <Link to="/error404" className="nav-link">Extra</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
