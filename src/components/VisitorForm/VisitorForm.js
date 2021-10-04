import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import inquiryImg from '../../images/enqury.png'

const VisitorForm = () => {
    return (
        <div className="mb-5 pb-2">
            <Container className="my-5 bg-secondary bg-opacity-25 rounded-2">
              <Row className="p-3 my-5 d-flex align-items-center justify-content-center">
                    <Col sm>
                        <div>
                            <img className="img-fluid" src={inquiryImg} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col sm className="p-2">
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

export default VisitorForm;