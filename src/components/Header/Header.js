import React from 'react';
import { Container, Nav, Navbar as Appbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Appbar bg="dark" variant="dark">
                <Container>
                    <Appbar.Brand href="#home">Navbar</Appbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Appbar>
        </div>
    );
};

export default Header;