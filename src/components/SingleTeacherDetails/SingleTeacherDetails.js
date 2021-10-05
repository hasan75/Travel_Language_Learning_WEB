import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './SingleTeacherDetails.css'
import {faEnvelope, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleTeacherDetails = () => {
    const {teacherId} = useParams();
    const [tDetails, setTDetails] = useState([]);
    const [singleTDetails, setSingleTDetails] = useState([]);

    useEffect(()=> {
        fetch('/instructors.json')
        .then(res => res.json())
        .then(data => setTDetails(data))
    },[])

    useEffect(()=>{
        const matchedSingleTeacher = tDetails.find((singleT) => singleT?._id === teacherId);
        setSingleTDetails(matchedSingleTeacher)
    },[tDetails])

    // const {name,company,picture,email,age,phone, fees, isHiarable} = singleTDetails;

     //fontawesome icons
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
    const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt}></FontAwesomeIcon>;

    const history = useHistory();

    //button for go to teachers page
    const handleToTeachersPage = () => {
        history.push('/teachers')
    }


    return (
        <div className="my-5 pt-3">
            <Container className="bg-secondary bg-opacity-25 p-3 rounded-3">
                <Row>
                <h2 className="text-success fw-bold my-3"> {singleTDetails?.name} teaches {singleTDetails?.company} </h2>
                    <Col sm className="d-flex justify-content-center align-items-center">
                        
                        <div>
                            <img src={singleTDetails?.picture} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col sm className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2>{singleTDetails?.name} is now {singleTDetails?.isHiarable ? "Available" : "UnAvailable" }</h2>
                            <h4>Age: {singleTDetails?.age}</h4>
                            <h4>{emailIcon} {singleTDetails?.email}</h4>
                            <h4>{phoneIcon} {singleTDetails?.phone}</h4>
                            <h3>Fees: ${singleTDetails?.fees}</h3>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="mt-3">
                        <p className="singleTeacher-text">
                        Our professional approach and continual development has led us to becoming the leading provider of professional language learning education. We combine innovative, fun and creative ways to teach languages and engage with students to reach their full potential. Innovative language lessons and classes from beginner through advanced for children, teens, and adults. We are the best language school for you. We have programs to suit everyone’s needs.

                        We are the only professional language school offering lessons for children, adults and seniors.

                        Peter Caroll

                        </p>
                    </div>
                </Row>
            </Container>
            <Button className="btn-warning mt-3" onClick={handleToTeachersPage}>Go Back To Teachers Page</Button>
        </div>
    );
};

export default SingleTeacherDetails;