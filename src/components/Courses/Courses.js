import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <Container className="my-5">
                <h1 className="text-success p-3">Courses We Offer</h1>
                <div className="border border-2 border-primary mb-5">
                </div>
            <Row xs={1} md={3} className="g-4">
             
             {
                courses.map(course => <Course
                    key={course._id}
                    course={course}></Course>)
             }
            
            </Row>
            </Container>
        </div>
    );
};

export default Courses;