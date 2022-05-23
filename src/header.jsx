import Navbar from 'react-bootstrap/Navbar';
import {Container, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import {NavLink} from "react-router-dom"

// export const Header = () => {
//   return (
//     <Navbar className='header-test'>
//       <Container bd="dark">
//         <Col>
//         <h1 >Rebekkah Huss</h1>
//         </Col>
//         <Col>
//         <Nav> 
//           <Link to="/" className="App-link"> About Me</Link>
//           <Link to="/portfolio" className="App-link">Portfolio</Link>
//           <Link to="/contact" className="App-link">Contact</Link>
//           <Link to="/resume" className="App-link">Resume</Link>
//         </Nav>
//         </Col>
//       </Container>
//     </Navbar>
//   );

 
// };

export const Header = () => {
  return (
    <div className="header-test">
      <h1>Rebekkah Huss</h1>
      <Navbar variant="tabs" >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#e4c5af" : "#9ece9a",
            background: isActive ? "#074f57" : "",
            borderRadius: "10px",
            fontSize: "25px",
           
          })}
          className="App-link"
        >
          About Me
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#e4c5af" : "#9ece9a",
            background: isActive ? "#074f57" : "",
            borderRadius: "10px",
            
          })}
          className="App-link"
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#e4c5af" : "#9ece9a",
            background: isActive ? "#074f57" : "",
            borderRadius: "10px",
            
          })}
          className="App-link"
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#e4c5af" : "#9ece9a",
            background: isActive ? "#074f57" : "",
            borderRadius: "10px",
           
          })}
          className="App-link"
        >
          Resume
        </NavLink>
      </Navbar>
    </div>
  );
};

