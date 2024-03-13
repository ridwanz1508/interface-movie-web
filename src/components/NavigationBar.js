// NavigationBar.js
import React from "react";
import { Image, Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import logo from "../assets/images/logo/logo1.png";
import '../style/landingPage.css'

const NavigationBar = () => {
  const expandValue = 'lg'; 

  return (
    <Navbar expand={expandValue} variant="dark" className="navbar">
        <Container fluid>
            {/* <Navbar.Brand href="#">E-SPORTS</Navbar.Brand> */}
            <Navbar.Brand href="/">
                <Image src={logo} alt="sport" className="logo mb-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expandValue}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expandValue}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expandValue}`}
                placement="end"
                className="text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, .9)" }}
                closeButton
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title 
                        id={`offcanvasNavbarLabel-expand-${expandValue}`}>
                        INFORMATION
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHEROS</Nav.Link>
                    <Nav.Link href="#action">SPECIAL</Nav.Link>
                    <NavDropdown 
                        title="LANGUAGES" 
                        id={`offcanvasNavbarDropdown-expand-${expandValue}`} 
                        bg="dark"
                        style={{ opacity: .9 }}
                    > 
                        <NavDropdown.Item href="#">Indonesia</NavDropdown.Item>
                        <NavDropdown.Item href="#">English</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#">普通话</NavDropdown.Item>
                        <NavDropdown.Item href="#">عربي</NavDropdown.Item>
                        <NavDropdown.Item href="#">русский язык</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">
                            <FaSearch className="me-0 mb-1" />
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;
