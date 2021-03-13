import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <Navbar bg="#0a043c" variant="dark">
        <Navbar.Brand href="/">
          <h1>blogger</h1>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="light">
            <Nav.Link href="/compose">Compose</Nav.Link>
          </Button>
        </Form>
      </Navbar>
    </header>
  );
}

export default Header;
