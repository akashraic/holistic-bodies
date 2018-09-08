import React, { Component} from 'react';
import  {Grid, Row, Col, Image} from 'react-bootstrap';
import './About.css';



class About extends Component {
    render() {
        return (
            <div className="About">
                <Grid>
                    <h1>About</h1>
                    <Row className="about-us">
                        <h2>About Us</h2>
                        <Col md={1} />
                        <Col md={5} className="triangle-wrapper">
                            <Image src="assests/Triangle.png" responsive className="triangle"/>
                        </Col>
                        <Col md={5} className="About-us-wrapper">
                            <p>Holistic bodies is about creating an holistic self. Holistic way of living involves the commitment to growth. Growth requires you to understand your own individual self, keeping an audit of your strength and weaknesses, and seizing the opportunities provided to you.
                                Holistics bodies is a space where you can learn about yourself, use tools to improve yourself, and share your improvements with the rest of the community.
                                We believe in empowering individuals through helping them explore their ethos, pathos and logos.
                            </p>
                        </Col>
                        <Col md={1} />
                    </Row>
                    <Row className="about-me">
                        <h2>About Me</h2>
                        <Col md={1} />
                        <Col md={5} className="person-wrapper">
                            <Image src="assests/Hussain.jpg" responsive className="person"/>
                        </Col>
                        <Col md={5} className="About-me-wrapper">
                            <p>My name is Hussain Bokhari. My wealth of experience comes from the years of learning and applying growth strategies, creating opportunities for people around me to live their version of purposeful life.</p>
                            <p>I have graduated with Ryerson University with a Bachelors and Masters of Engineering (Aerospace). A lot of people ask me why I am not an engineering, its because there are more than one ways to help people, the best and closest way to my heart has been _….</p>
                        </Col>
                        <Col md={1} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default About;
