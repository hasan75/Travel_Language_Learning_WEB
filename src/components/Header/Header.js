import React from 'react';
import { Container, Nav, Navbar as Appbar } from 'react-bootstrap';
import img from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Appbar bg="dark" variant="dark">
                <Container>
                <img
                    src={img}
                    width="40"
                    height="30"
                    className="d-inline-block align-top me-3"
                    alt="React Bootstrap logo"
                    />
                    <Appbar.Brand href="#">TLL</Appbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Teachers</Nav.Link>
                    </Nav>
                </Container>
            </Appbar>
        </div>
    );
};

export default Header;