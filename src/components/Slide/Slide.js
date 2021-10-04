import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import img1 from '../../images/language-learn.jpg'
import img2 from '../../images/language-learn2.jpg'
import img3 from '../../images/language-school-2.jpg'

const Slide = () => {
    return (
        <div>
            <Container className="my-2">
             <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>Learn Any of your favorite Language</h3>
                        <p>Here, all the instructors are ready to help you to fullfill your dream</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                     />

                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>Earn Certification</h3>
                        <p>You will get your certificate for each course you will finish</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="bg-secondary bg-opacity-75 rounded-1 m-3 p-3">
                        <h3>Learn Fast, Move Fast</h3>
                        <p>These Courses are organized in a way that you will be very fast to learn the langugages</p>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
            </Container>
        </div>
    );
};

export default Slide;