import React, {Component} from 'react';
import {Grid, Row, Col, Image, Nav, NavItem} from 'react-bootstrap';
import './Home.css';
import {goToTop, removeHash} from 'react-scrollable-anchor'


class Home extends Component {
    componentWillMount() {
        removeHash();
         goToTop();
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid text-center Heading">
                    <Col md={3} xs={0}/>
                    <Col className="Head-wrap-1" md={2} xs={4}>
                        <h1 className="Head-1">HOLISTIC</h1>
                    </Col>
                    <Col className="Logo-wrapper" md={2} xs={4}>
                        <Image src="/assests/Main_Logo.png" circle className="logo"/>
                    </Col>
                    <Col className="Head-wrap-2" md={2} xs={4}>
                        <h1 className="Head-2">BODIES</h1>
                    </Col>
                    <Col md={3} xs={0}/>
                </Row>
                <Row className="show-grid text-center Menu-row">
                    <Col md={2}/>
                    <Col md={8} className="Menu-items">
                        <Nav bsStyle="pills" justified className="Items">
                            <NavItem eventKey={1} className="nav-link" href="#Home">Home</NavItem>
                            <NavItem eventKey={2} className="nav-link" href="#About">About</NavItem>
                            <NavItem eventKey={3} className="nav-link" href="#Videos">Videos</NavItem>
                            <NavItem eventKey={4} className="nav-link" href="#Blog">Blog</NavItem>
                            <NavItem eventKey={5} className="nav-link" href="#Merchandise">Merchandise</NavItem>
                            <NavItem eventKey={6} className="nav-link" href="#Training">Training</NavItem>
                            <NavItem eventKey={7} className="nav-link" href="#Subscribe">Subscribe</NavItem>
                            <NavItem eventKey={8} className="nav-link" href="#Footer">Contact</NavItem>
                        </Nav>
                        <Col md={2}/>
                    </Col>
                </Row>
                <hr/>
            </Grid>
        );
    }
}

export default Home;
