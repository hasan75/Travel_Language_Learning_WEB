import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleCourseDetails = () => {
    const {id} = useParams();
    const [coursesDetails, setCoursesDetails] = useState([])
    const [singleCourse, setSingleCourse] = useState([]);

        //this is where the data loads
        useEffect(()=>{
            fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCoursesDetails(data))
        },[])
    
        useEffect(()=>{
            const matchedCourse = coursesDetails?.find((course) => course.id === parseInt(id));
            setSingleCourse(matchedCourse);
        },[coursesDetails])

    return (
        <div>
            <h2>Course number: {singleCourse?.id}</h2>
            <Container className="my-5 p-3 bg-custom rounded-3">
                <Row className="mt-3 p-3">
                    <Col sm className="d-flex align-items-center justify-content-center">
                        <div>
                            <img className="img-fluid" src={singleCourse?.picture} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col sm className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="fw-bolt text-white mb-3 ">
                                {singleCourse?.name}
                            </h2> <br />
                            <p className="fw-bold text-custom">
                                {singleCourse?.details}
                            </p>
                            <h3 className="text-white">Course Fees: <span className="text-danger">${singleCourse?.fees}</span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleCourseDetails;