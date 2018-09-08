import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


export default class CustomNavbar extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Navbar collapseOnSelect inverse fluid /*fixedTop*/>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="Home">Holistic Bodies </a>
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
                        <NavItem eventKey={5} href="#Merchandise">
                            Merchandise
                        </NavItem>
                        <NavItem eventKey={6} href="#Training">
                            Training
                        </NavItem>
                        <NavItem eventKey={7} href="#Subscribe">
                            Subscribe
                        </NavItem>
                        <NavItem eventKey={8} href="#Footer">
                            Footer
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


