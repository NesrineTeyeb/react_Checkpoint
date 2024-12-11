import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const firstName = "Nesrine";

function App() {
  return (
    <Container >
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-5 fixed-top w-100 px-0 mx-0">
        <Navbar.Brand href="#home">MonApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produits">Nos produits</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <div className="card d-flex flex-row align-items-center">
            {/* Image à gauche */}
            <Image className="card-img-left"/>

            {/* Contenu à droite */}
            <div className="card-body">
              <h2 className="card-title">
                <Name />
              </h2>
              <p className="card-text">
                <Price />
              </p>
              <p className="card-text">
                <Description />
              </p>
              <button>Click to buy</button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="text-center">
          <p className="mt-3">
            {firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}
          </p>
          {firstName && <img src="user.png" alt="Bienvenue" />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
