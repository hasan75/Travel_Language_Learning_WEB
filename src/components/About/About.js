import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logoImg from '../../images/logo.png'
import ContactUs from '../ContactUs/ContactUs';
import './About.css'

const About = () => {
    return (
        <div className="my-5 py-1">
            <Container className="my-5 p-3 bg-custom rounded-3">
            <Row className="mt-3 p-3">
                <Col sm className="d-flex align-items-center justify-content-center">
                    <div>
                        <img className="img-fluid" src={logoImg} alt="" srcset="" />
                    </div>
                </Col>
                <Col sm className="d-flex align-items-center justify-content-center">
                    <div>
                        <h2 className="fw-bolt text-white mb-3 ">
                                About The Institute
                        </h2> <br />
                        <p className="fw-bold text-custom"> <span className="text-uppercase">
                             “If you talk to a man in a language he understands, that goes to his head.  If you talk to him in his language, that goes to his heart.”—Nelson Mandela. </span> <br /> <br /> Language learning was once considered nothing more than a hobby, but as the world continues to become increasingly connected, learning a second language is considered a necessity. <br /> Advancing technologies have afforded us the ability to communicate no matter where we are in the world, amplifying the importance of foreign language study.In a globalized world, those who speak multiple languages—particularly English, French, Mandarin or Arabic—have a much better chance to find meaningful employment. The ability to speak a modern language gives graduates a competitive edge over others as the demand for bilingual workers in the world continues to rise.
                        </p>
                    </div>
                </Col>
            </Row>
            </Container>
            <Container>
                <ContactUs></ContactUs>
            </Container>
            
        </div>
    );
};

export default About;