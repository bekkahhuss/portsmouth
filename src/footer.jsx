import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export const Footer = () => {
    return (
        <div className="footer footer-center">
            <Navbar className="">
                <Nav>
                    <Nav.Link href="https://github.com/bekkahhuss"><img src={github} alt="" className="icon"></img></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/rebekkah-huss-310658135/"><img src={linkedin} alt="" className="icon"></img></Nav.Link>
                </Nav>
                    
            </Navbar>
        </div>
        
    )
}