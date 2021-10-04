import React from 'react';
import Courses from '../Courses/Courses';
import ShortDescription from '../ShortDescription/ShortDescription';
import Slide from '../Slide/Slide';


const Home = () => {


    return (
        <div>
            <ShortDescription></ShortDescription>
            <Slide></Slide>
            <Courses></Courses>
        </div>
    );
};

export default Home;