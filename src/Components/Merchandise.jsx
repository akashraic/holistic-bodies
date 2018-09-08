import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Button} from 'react-bootstrap';
import './Merchandise.css';

class Merchandise extends Component {
    render() {
        return (
            <div className="Merchandise">
                <h1>Merchandise</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p className="Video-description">Click on the button below to view some of my Merchandise</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    <Row className="Button-wrapper-wrap">
                    <Col md={3}/>
                    <Col md={6} className="Button-wrapper">
                        <Button block href="https://hussainbokhari.selz.com" target="_blank">
                            Continue to Store
                        </Button>
                    </Col>
                    <Col md={3}/>
                </Row>
                </Grid>

            </div>
        );
    }
}

export default Merchandise;
