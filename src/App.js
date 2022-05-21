import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import photo from './assets/profile.jpg';
import { Header } from './header';
import { Footer } from './footer';
 

function App() {
  return (
    <>
      <Header />
      <div>
        <Container className="full-space">
          <h2>About Me</h2>
          <div>
            <Row>
              <Col>
                <img src={photo} alt="photo" className="profilePic" />
              </Col>
              <Col>
                <p>
                  I am a Marketing professional, and spend my days writing and
                  creating content to support clinical trials research. I
                  learned how to code to expand on the features of plug-and-play
                  digital marketing softwares like Wordpress and Marketo which
                  kicked off my journey to becoming a Full Stack Developer.
                  <br></br>
                  As a North Carolina native, I studied Communications at North
                  Carolina Central University and attended the Full Stack
                  Developer Bootcamp at UNC Chapel Hill. I have a great love of
                  the outdoors and spend my free time on hiking trails,
                  gardening and enjoying my family.{" "}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
