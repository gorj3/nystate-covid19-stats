import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

const GlobalNavBar = () => (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">NY Covid-19 Stats</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
        </Nav>
    </Navbar>
    </>
  )
  
  export default GlobalNavBar;