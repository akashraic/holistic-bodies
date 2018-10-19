import React, { Component } from 'react';
import {Grid, Row, Col, Button, ResponsiveEmbed} from 'react-bootstrap';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <h1>Blog</h1>
                <Grid>
{/*                    <Row className="Blog-wrapper-wrap">
                        <Col md={12} className="Blog-wrapper">
                            <iframe src ="https://holsiticbodies.blogspot.com/" width="100%" height="900" frameBorder="0" className="Blg">
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                        </Col>
                    </Row>*/}
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p>Click on the button below to view some of my blogs</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    <Row className="Button-wrapper-wrap">
                        <Col md={3}/>
                        <Col md={6} className="Button-wrapper">
                            <Button className="Btn" href="https://holsiticbodies.blogspot.com/" block>
                                Continue to Blog
                            </Button>
                        </Col>
                        <Col md={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Blog;
