import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import photo from './assets/profile.jpg';
import { Header } from './header';
import { Footer } from './footer';
 

function App() {
  return (
    <>
      <Header />
        <Container className="full-space">
          <div className='App'>
          <h2>About Me</h2>
            <Row>
              <Col>
                <img src={photo} alt="photo" className="profilePic" />
              </Col>
              <Col className='about'>
                <p >
                  I am a Marketer for a clinical research company and a web development student. 
                  As a North Carolina native, I studied Communications at North
                  Carolina Central University and attended the Full Stack
                  Developer Bootcamp at UNC Chapel Hill. I have a great love of
                  the outdoors and enjoy hiking, gardening and time with family.{" "}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
    </>
  );
}

export default App;
