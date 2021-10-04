import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import {faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    const teacherIcon = <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>

    useEffect(()=>{
        fetch('./instructors.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className="py-5 my-3">
            <Container>
            <h1 className="text-success p-3">{teacherIcon}  {teachers.length} Teachers We Have</h1>
                <div className="border border-2 border-warning mb-5">
                </div>
            <Row xs={1} md={3} className="g-4">
             
             {
                teachers.map(teacher => <Teacher
                    key={teacher._id}
                    teacher={teacher}></Teacher>)
             }
            
            </Row>
            </Container>
            
        </div>
    );
};

export default Teachers;