import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

const GlobalNavBar = () => (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>NY state COVID-19 stats</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link target="_blank" rel="noreferrer" href="https://github.com/gorj3/nystate-covid19-stats">GitHub</Nav.Link>
        </Nav>
    </Navbar>
    </>
  )
  
  export default GlobalNavBar;