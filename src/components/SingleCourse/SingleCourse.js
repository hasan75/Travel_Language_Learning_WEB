import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import MatchedTeacher from '../MatchedTeacher/MatchedTeacher';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleCourseDetails from '../SingleCourseDetails/SingleCourseDetails';

const SingleCourse = () => {
    const {id} = useParams();
    const [teachers, setTeachers]= useState([]);
    const [courseTeachers, setCourseTeacher] = useState([]);

    const history = useHistory();



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
            <SingleCourseDetails></SingleCourseDetails>
            
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