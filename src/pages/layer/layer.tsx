import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Protector Security</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#support">
            <AiOutlineQuestionCircle size={20} />
            Support
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
