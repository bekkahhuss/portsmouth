import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"

export const Header = () => {
    return (
      <Navbar className='header-test'>
        <Container bd="dark">
          <Navbar.Brand>Rebekkah Huss</Navbar.Brand>
          <Nav>
            <Link to="/" className="App-link"> About Me</Link>
            <Link to="/portfolio" className="App-link">Portfolio</Link>
            <Link to="/contact" className="App-link">Contact</Link>
            <Link to="/resume" className="App-link">Resume</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}


