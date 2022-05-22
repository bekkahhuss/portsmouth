import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import {NavLink} from "react-router-dom"

export const Header = () => {
  return (
    <Navbar className='header-test'>
      <Container bd="dark">
        <h1 >Rebekkah Huss</h1>
        <Nav>
          <Link to="/" className="App-link"> About Me</Link>
          <Link to="/portfolio" className="App-link">Portfolio</Link>
          <Link to="/contact" className="App-link">Contact</Link>
          <Link to="/resume" className="App-link">Resume</Link>
        </Nav>
      </Container>
    </Navbar>
  );

  // return (
  //   <div className="header">
  //     <Navbar className="header-test">
  //       <Col>
  //         <div>
  //           <h1>Rebekkah Huss</h1>
  //         </div>
  //       </Col>
        {/* <Col className="App-header-nav">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              background: isActive ? "#92edf3" : "",
              borderRadius: "10px",
            })}
            className="App-link"
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              background: isActive ? "#92edf3" : "",
              borderRadius: "10px",
            })}
            className="App-link"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              background: isActive ? "#92edf3" : "",
              borderRadius: "10px",
            })}
            className="App-link"
          >
            Contact
          </NavLink>
          <NavLink
            to="/Resume"
            style={({ isActive }) => ({
              color: isActive ? "#000000" : "#ffffff",
              background: isActive ? "#92edf3" : "",
              borderRadius: "10px",
            })}
            className="App-link"
          >
            Resume
          </NavLink>
        </Col> */}
  //     </Navbar>
  //   </div>
  // );
};


