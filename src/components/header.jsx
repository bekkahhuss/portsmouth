import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Rebekkah Huss</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}


