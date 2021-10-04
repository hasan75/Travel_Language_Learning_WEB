import React from 'react';
import errorImg from '../../images/404-error-page.png';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const hangleBack = () => {
        history.push('/home')
    }

    return (
        <div className="mt-5">
            <div>
                <img className="img-fluid w-100" src={errorImg} alt="" srcset="" />
            </div>
            <div className="my-5 text-danger">
                <h1 className="p-2">Page Not Found!!</h1>
                <h4 className="p-2">The Requested URL was not found in this server. Files or Pages are missing or you are writting the wrong url. Please Check it again</h4>
            </div>
            <Button className="mb-3" onclick={hangleBack}>
                Go Back to Home Page
            </Button>
        </div>
    );
};

export default NotFound;