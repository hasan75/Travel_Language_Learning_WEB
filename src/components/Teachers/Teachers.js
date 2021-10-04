import React, { useEffect, useState } from 'react';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('/instructors.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])
    return (
        <div>
            <h2>Teachers</h2>
        </div>
    );
};

export default Teachers;