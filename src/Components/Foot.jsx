import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import './Foot.css';

class Foot extends Component {
    render() {
        return (
            <div className="Foot">
                <Grid>
                    <Row className="footer">
                        <Col md={4} />
                        <Col md={4} className="foot">
                            <ul className="list">
                                <li className="list-unstyled"><a href={'/Terms'} className="link">Terms of Use</a></li>>
                            </ul>
                            <div className="footer-copyright">
                                &copy; {(new Date().getFullYear())} Copyright: Holisitic Bodies
                            </div>
                            <div className="developer-copyright">
                                &copy; {(new Date().getFullYear())} Developed By: <a href="https://www.akashrai.me.s3-website.ca-central-1.amazonaws.com" className="link"> Akash Rai Chhabria </a>
                            </div>
                        </Col>
                        <Col md={4} />
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default Foot;