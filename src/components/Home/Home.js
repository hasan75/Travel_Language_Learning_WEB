import React from 'react';
import Courses from '../Courses/Courses';
import ShortDescription from '../ShortDescription/ShortDescription';
import Slide from '../Slide/Slide';
import VisitorForm from '../VisitorForm/VisitorForm';


const Home = () => {


    return (
        <div className="my-5">
            <ShortDescription></ShortDescription>
            <Slide></Slide>
            <Courses></Courses>
            <VisitorForm></VisitorForm>
        </div>
    );
};

export default Home;