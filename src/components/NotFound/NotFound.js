import React from 'react';
import errorImg from '../../images/404-error-page.png';

const NotFound = () => {
    return (
        <div>
            <div>
                <img className="img-fluid w-100" src={errorImg} alt="" srcset="" />
            </div>
            <div className="my-2 text-danger">
                <h2>Page Not Found!!</h2>
            </div> 
        </div>
    );
};

export default NotFound;