import React, { Component } from 'react';
import  {Grid, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSnapchat} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Grid>
                    <Row>
                        <Col md={3} />
                        <Col md={6}>
                            <h1>Contact</h1>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={4} />
                        <Col md={4} className="social-media">
                            <a href="https://www.instagram.com/huss_life/?hl=en" target="_blank"><FontAwesomeIcon className="instant fa-fw" icon={faInstagram} color="black"/></a>
                            <a href="https://www.snapchat.com/add/hussainbokz" target="_blank"><FontAwesomeIcon className="snap fa-fw" icon={faSnapchat} color="black"/></a>
                            <a href="mailto:hussainbokharifit@gmail.com" target="_blank"><FontAwesomeIcon className="mail fa-fw" icon={faEnvelope} color="black"/></a>
                        </Col>
                        <Col md={4}/>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Footer;
