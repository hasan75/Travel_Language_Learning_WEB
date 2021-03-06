import React from 'react';
import { Container, Nav, Navbar as Appbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="fixed-top">
            <Appbar bg="dark" variant="dark">
                <Container>
                <img
                    src={img}
                    width="40"
                    height="30"
                    className="d-inline-block align-top me-3"
                    alt="React Bootstrap logo"
                    />
                    <Appbar.Brand >TLL</Appbar.Brand>
                    <Nav className="me-auto">
                    <Stack direction="horizontal" gap={5}>
                        <NavLink className="text-decoration-none text-white ms-2 header-button"
                        exact to="/home"
                        >
                         Home
                        </NavLink>
                        <NavLink className="text-decoration-none text-white header-button"
                        exact to="/about"
                        >
                         About
                        </NavLink>
                        <NavLink className="text-decoration-none text-white header-button"
                        exact to="/courses"
                        >
                         Courses
                        </NavLink>
                        <NavLink className="text-decoration-none text-white header-button"
                        exact to="/teachers"
                        >
                         Teachers
                        </NavLink>
                     </Stack>
                    </Nav>
                </Container>
            </Appbar>
        </div>
    );
};

export default Header;