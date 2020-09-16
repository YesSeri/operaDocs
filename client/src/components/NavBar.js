import React from 'react';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
function NavBar({ filename }) {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/operas">Operas</Nav.Link>
          <Nav.Link href="/composers">Composers</Nav.Link>
          <Nav.Link href="/pieces">Pieces</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
