import React from "react";
import "./navstyle.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavTabs() {
    return (
    <Navbar bg="Light" expand="lg">
        <Navbar.Brand className='logo' href="#home">Clicky Magee</Navbar.Brand>

        <Nav className="mr-auto">
        </Nav>

        <div className="nav-item score">
            Score: 0 |
            Highest Score: 0
        </div>
    </Navbar>
    );
}

export default NavTabs;
