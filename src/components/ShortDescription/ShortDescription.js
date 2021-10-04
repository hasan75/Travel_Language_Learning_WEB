import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShortDescription = () => {
    return (
        <div className="mt-5">
            <Container className="my-2 bg-secondary  bg-opacity-25 rounded-2">
              <Row className="p-4">
                    <Col sm className="d-flex align-items-center justify-content-center">
                        <div>
                            <h1>Private Lessons</h1>
                        </div>
                    </Col>
                    <Col sm className="d-flex align-items-center justify-content-center">
                        <div>
                            <p className="fw-bold text-success">We offer learning lessions for 7 languages in both online and offline! We provide private lessons. Students can also do the classes in online</p>
                        </div>
                    </Col>
                    <Col sm className="d-flex align-items-center justify-content-center">
                        <Link exact to='/about'>
                             <Button variant="outline-success" size="lg">Learn More</Button>
                        </Link>
                    </Col>
              </Row>
            </Container>
        </div>
    );
};

export default ShortDescription;