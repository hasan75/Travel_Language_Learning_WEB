import React from 'react';
import { Container, Nav, Navbar as Appbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                    <Stack direction="horizontal" gap={5}>
                        <NavLink className="text-decoration-none text-white ps-2"
                        to="/home"
                        >
                         Home
                        </NavLink>
                        <NavLink className="text-decoration-none text-white"
                        to="/about"
                        >
                         About
                        </NavLink>
                        <NavLink className="text-decoration-none text-white"
                        to="/courses"
                        >
                         Courses
                        </NavLink>
                        <NavLink className="text-decoration-none text-white"
                        to="/teachers"
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