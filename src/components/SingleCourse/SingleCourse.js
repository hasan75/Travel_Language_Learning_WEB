import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import MatchedTeacher from '../MatchedTeacher/MatchedTeacher';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleCourse = () => {
    const {id} = useParams();
    const [coursesDetails, setCoursesDetails] = useState([])
    const [singleCourse, setSingleCourse] = useState([]);
    const [teachers, setTeachers]= useState([]);
    const [courseTeachers, setCourseTeacher] = useState([]);

    const history = useHistory();

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

    useEffect(()=> {
        fetch('/instructors.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    useEffect(()=>{
        const matchedTeachers = teachers?.filter((teacher) => teacher.id === parseInt(id))
        setCourseTeacher(matchedTeachers)
        
    },[teachers]);

    //routing to course page using history api
    const handleButtonClick = () => {
        history.push('/courses')
    }
    //fontAwesome icon
    const backIcon = <FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>

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
            <Container className="my-5">
            <h1 className="text-success   p-3">{courseTeachers?.length} Teachers For this Course</h1>
                <div className="border border-2 border-warning mb-5">
                </div>
            <Row xs={1} md={3} className="g-4">
             
             {
                courseTeachers?.map(courseTeacher => <MatchedTeacher
                    key={courseTeacher?._id}
                    courseTeacher={courseTeacher}>
                </MatchedTeacher>)
             }
            
            </Row>
                <Button className="my-5" onClick={handleButtonClick}>{backIcon} Back to All Courses </Button>
            </Container>
        </div>
    );
};

export default SingleCourse;