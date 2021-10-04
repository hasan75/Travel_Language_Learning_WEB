import React from 'react';
import { Container, Navbar as Footbar, NavbarBrand } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="fixed-bottom">  
            <Footbar className="bg-dark">
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Footbar>
        </div>
    );
};

export default Footer;
