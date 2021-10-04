import { faInfoCircle, faMoneyCheckAlt, faUniversity} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const {picture, name, details, fees, id} = props.course;
    const feeIcon = <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>;
    const courseIcon = <FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon>;
    const DetailIcon = <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>;

    const url = `/courses/${id}`;

    return (
        <div>
            <Col>
             <Card>
               <Card.Img variant="top" className=" course-image" src={picture} />
                <Card.Body>
                 <Card.Title className="text-primary fw-bold">{courseIcon} {name}</Card.Title>
                 <Card.Text>
                    <p>{details}</p>
                    <h2 className="text-danger">{feeIcon} Fees:  {fees}</h2>
                 </Card.Text>
                 <Link to={url}>
                    <Button variant="outline-success">{DetailIcon} See Details</Button>
                 </Link>
                 
                </Card.Body>
             </Card>
            </Col>
        </div>
    );
};

export default Course;