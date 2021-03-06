import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { faDollarSign, faEnvelope, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Teacher.css'
import { useHistory } from 'react-router';

const Teacher = (props) => {
    const {picture, name, fees, age, email, company, _id} = props.teacher;
    
    const history = useHistory();

    //fontawesome icons
    const moneyIcon = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>;
    const mailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
    const ContactIcon = <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>;

    const handleSingleTeacher = () => {
        history.push(`/teachers/${_id}`)
    }


    return (
        <div>
            <Col>
             <Card>
               <Card.Img className="teacher-img" variant="" src={picture} />
                <Card.Body>
                 <Card.Title className="text-primary fw-bold fs-3">{name}</Card.Title>
                 <Card.Text>
                     <h5>Teaches: <span className="text-success fw-bold">{company}</span></h5>
                     <p>Age: {age}</p>
                     <p>{mailIcon} Email: {email}</p>
                     <h4> Fees: <span className="text-danger fw-bold">{moneyIcon} {fees}</span> </h4>
                 </Card.Text>
                 <Button variant="outline-success" onClick={handleSingleTeacher}>{ContactIcon} Contact Me</Button>
                </Card.Body>
             </Card>
            </Col>
        </div>
    );
};

export default Teacher;