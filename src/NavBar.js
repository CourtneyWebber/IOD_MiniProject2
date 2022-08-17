import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Sunflower from './sunflower.png';

export const NavBar = () => {
    return (
        <Navbar className="navbar" sticky="top" role="navigation">
            <Container>
                <Navbar.Brand className="navBrand">
                    <img
                        src={Sunflower}       
                        className="App-logo"
                        alt="Sunflower logo" />
                    <Navbar.Text className="navText">
                        &nbsp;
                        SUNFLOWER
                    </Navbar.Text>
                </Navbar.Brand>
                <Nav.Link href="/">Blog</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="login">Log In</Nav.Link>
                <Nav.Link href="signup">Sign Up</Nav.Link>
            </Container>
        </Navbar>
    )
}