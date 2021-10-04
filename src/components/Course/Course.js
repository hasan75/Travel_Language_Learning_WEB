import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const {picture, name, details, fees} = props.course
    return (
        <div>
            <Col>
             <Card>
               <Card.Img className="cart-img" variant="" src={picture} />
                <Card.Body>
                 <Card.Title>{name}</Card.Title>
                 <Card.Text>
                    {details}
                    <h2>{fees}</h2>
                 </Card.Text>
                 <Button variant="outline-success">See Details</Button>
                </Card.Body>
             </Card>
            </Col>
        </div>
    );
};

export default Course;