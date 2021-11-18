import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container} from 'react-bootstrap'
const Navigation = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CRUD Café</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Extra">Extra</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
