import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import './Home.css';
import ReactPlayer from 'react-player';


class Home_Videos extends Component {
    render() {
        return (
            <div className="Home_Videos">
                <Grid className="video_container">
                    <Row className="show-grid text-center Video-row">
                        {/*<Col xs={1}/>*/}
                        <Col md={12} className="Video-wrapper">
                            <div style={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden'
                            }}>
                                <ReactPlayer
                                    className="Player"
                                    url="/assests/LandingPageVideo.mp4"
                                    width="100%"
                                    height="100%"
                                    controls/>
                            </div>
                        </Col>
                        {/*<Col xs={1}/>*/}
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Home_Videos;