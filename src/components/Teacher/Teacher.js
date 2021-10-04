import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Teacher.css'

const Teacher = (props) => {
    const {picture, name, fees, age, email, company} = props.teacher;
    console.log(props.teacher)
    return (
        <div>
            <Col>
             <Card className="card">
               <Card.Img className="cart-img" variant="" src={picture} />
                <Card.Body>
                 <Card.Title className="text-primary">{name}</Card.Title>
                 <Card.Text>
                     <h5>Teaches: <span className="text-success fw-bold">{company}</span></h5>
                     <p>Age: {age}</p>
                     <p>Email: {email}</p>
                     <h4>Fees: <span className="text-danger fw-bold">{fees}</span> </h4>
                 </Card.Text>
                 <Button variant="outline-success">Contact Me</Button>
                </Card.Body>
             </Card>
            </Col>
        </div>
    );
};

export default Teacher;