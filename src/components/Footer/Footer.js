import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark w-100">  
            
            <Container>
                <nav class="navbar navbar-default  navbar-fixed-bottom" role="navigation">
                    <div class="container text-center">
                     <p class="text-warning fs-3 fw-bold navbar-text col-md-12 col-sm-12 col-xs-12 ">Travel Language Learning</p>
                     <p class="navbar-text text-white col-md-12 col-sm-12 col-xs-12">&copy; Hasan Ahmed, 2021</p>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Footer;
