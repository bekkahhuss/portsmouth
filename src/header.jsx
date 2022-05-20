import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"

export const Header = () => {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Rebekkah Huss</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/body">Body</Link> | {" "}
          </Nav>
        </Container>
      </Navbar>
    );
}


