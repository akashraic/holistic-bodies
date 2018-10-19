import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import  {Grid, Row, Col} from 'react-bootstrap';
import './Videos.css';

class Videos extends Component {
    render() {
        return (
            <div className="Videos">
                <h1>Videos</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p>This is the video section where you can find some videos from my
                            upcoming video series</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    <Row className="Video-wrapper">
                        <Col md={4} className="Video_1">
                            <ReactPlayer
                                className="player"
                                url="assests/EDUCATE.mp4"
                                width="100%"
                                height="100%"
                                controls />
                        </Col>
                        <Col md={4}>
                            <ReactPlayer
                                className="player"
                                url="assests/EMPOWER.mp4"
                                width="100%"
                                height="100%"
                                controls />
                        </Col>
                        <Col md={4}>
                            <ReactPlayer
                                className="player"
                                url="assests/ENJOY.mp4"
                                width="100%"
                                height="100%"
                                controls />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Videos;
