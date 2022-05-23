import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Header } from '../header';
import { Footer } from '../footer';
import placeholder from '../assets/star.png';


export default function Portfolio() {
    return (
      <>
        <Header />
        <Container>
          <div className="App">
            <h2>Portfolio</h2>
            {/* Row 1*/}
            <Row className="Row-space">
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Employee Profile</Card.Title>
                    <Card.Text className="cardFont">
                      This program manages employee information. Generates HTML
                      with employee cards containing employee records. The user
                      enters answers in the terminal via inquirer prompts.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/bekkahhuss/employee-profile"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                    <Card.Text className='cardFont'>
                      This tool allows business owners to view and manage the
                      departments, roles, and employees for their company. It
                      operates as a command line interface.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/bekkahhuss/employee-tracker"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Social Genie</Card.Title>
                    <Card.Text className='cardFont'>
                      This application uses a NoSQL database to create an API
                      that holds the user accounts and thoughts posted on the
                      Social Genie Network. Users can share thoughts, add
                      friends and react to other users thoughts. This version of
                      of social-genie has the ability to start the server and
                      and sync Mongoose models to the MongoDB database.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/bekkahhuss/social-genie"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* Row 2*/}
            <Row className="Row-space">
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Shopping With Bitcoin</Card.Title>
                    <Card.Text className='cardFont'>
                      With the Crypto space heating up, people want to know what
                      they can buy with their cryptocurrencies. Our website
                      allows users to search for common products, and display
                      their price in dollars and the equivalent in Bitcoin,
                      Ethereum, Binance Coin, Cardano and Solana(Top 5 Cryptos
                      by Market Cap). Searches are persistent across sessions,
                      so you can pick up where you left off.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/gordonlc18/shopping_with_bitcoin"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Walks Of Love</Card.Title>
                    <Card.Text className='cardFont'>
                      The Walks of Love is a full-stack website that matches pet
                      owners with freelance pet care specialists looking for new
                      friends to care about. It allows pet owners to post
                      opportunities to care for their pets when they are unable
                      to and allows potential pet caregivers to accept those
                      opportunities.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/bdswartz/walks-of-love"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={placeholder} className="photo" />
                  <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text className='cardFont'>
                      This program allows a user to keep track of thoughts and
                      organize information be writing, saving and deleting
                      notes. The navigation page allows the user to click a
                      button to access a list of all their previous notes and
                      create new ones at the click of a button. Uses JSON to
                      store notes and express JS to serve them to the server.
                    </Card.Text>
                    <Button className='cardButton'
                      variant="primary"
                      href="https://github.com/bekkahhuss/note-taker"
                    >
                      View Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="supplemental-space"></div>
        <Footer />
      </>
    );
}