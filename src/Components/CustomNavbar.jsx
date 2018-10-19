import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './CustomNavbar.css';


export default class CustomNavbar extends Component {
    render()
        {
            return (
                <Navbar collapseOnSelect inverse fluid className="Nav">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div><a href="#Home" style={{ color: '#9d9d9d'}}>Holistic Bodies </a></div>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#Home">
                                Home
                            </NavItem>
                            <NavItem eventKey={2} href="#About">
                                About
                            </NavItem>
                            <NavItem eventKey={3} href="#Videos">
                                Videos
                            </NavItem>
                            <NavItem eventKey={4} href="#Blog">
                                Blog
                            </NavItem>
                            <NavItem eventKey={6} href="#Training">
                                Training
                            </NavItem>
                            <NavItem eventKey={5} href="#Merchandise">
                                Merchandise
                            </NavItem>
                            <NavItem eventKey={7} href="#Subscribe">
                                Subscribe
                            </NavItem>
                            <NavItem eventKey={8} href="#Footer">
                                Contact
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
}



