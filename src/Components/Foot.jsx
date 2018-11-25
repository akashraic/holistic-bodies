import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap"; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Foot.css';

class Foot extends Component {
    render() {
        return (
            <div className="Foot">
                <Grid>
                    {/*contains the LLC code and the terms link*/}
                    <Row className="footer">
                        <Col md={4} sm={3} />
                        <Col md={4} sm={6} className="foot">
                            {/*this code retrieves the year and updates it automatically*/}
                            <ul className="list">
                                <li className="footer-copyright list-unstyled first horizontal">&copy; {(new Date().getFullYear())} Holisitic Bodies</li>
                                <li className="list-unstyled horizontal"><a href={'/Terms'} className="link">Terms</a></li>
                            </ul>
                            <div className="developer-copyright">
                                &copy; {(new Date().getFullYear())} Developed By: <a href="https://www.akashrai.me.s3-website.ca-central-1.amazonaws.com" className="link"> Akash Rai Chhabria </a>
                            </div>
                        </Col>
                        <Col md={4} sm={3} />
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default Foot;