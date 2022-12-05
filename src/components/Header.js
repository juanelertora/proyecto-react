// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import Logo from "../img/logo.png";
import Carro from "../img/carro.png";

function Header() {
  return (
    <header className="container-fluid bg-light p-2">
        <div className="row ">
                <div className="col-sm-12 col-md-10 col-xl-11">
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href=""><img src={Logo} alt=""/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                                <Nav.Link as={Link} to="home">Home</Nav.Link>
                                <Nav.Link as={Link} to="productos">Productos</Nav.Link>
                                </Nav>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                    type="search"
                                    placeholder=""
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form> */}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            <div className="col-sm-12 col-md-2 col-xl-1 d-flex justify-content-center align-items-center">
                <img src={Carro} alt=""/>
            </div>
        </div>
    </header>
);
}

export default Header;
