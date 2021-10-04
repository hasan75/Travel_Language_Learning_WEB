import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import addressImg from '../../images/address.png'
import callImg from '../../images/call.png'
import emailImg from '../../images/email.png'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <Container className="bg-contact-custom bg-opacity-25 p-3 my-3 p-3 rounded-2">
            <Row className="d-flex justify-content-center align-items-center fw-bold">
                <Col sm>
                    <div>
                        <div className="d-flex align-items-center mb-2">
                            <div className=" me-3">
                            <img className="contact_photo" src={addressImg} alt="address_image" srcset="" />
                            </div>
                            <div>
                            <p>160/3 KukurMukur Goli, Wes Pagla, Dhaka-4320</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className=" me-3">
                            <img className="contact_photo" src={callImg} alt="call_image" srcset="" />
                            </div>
                            <div>
                            <p>Call us24/7!! +8801761395574</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className=" me-3">
                            <img className="contact_photo" src={emailImg} alt="email_image" srcset="" />
                            </div>
                            <div>
                            <p>Email me @ hasanjab14@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col sm>
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control type="text" placeholder="What's the topic you want to share about?" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Please tell us more</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                                Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ContactUs;