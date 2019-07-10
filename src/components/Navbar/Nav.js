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
    </Navbar>
    );
}

export default NavTabs;
