import React from 'react';
import error from '../../assets/images/error.jpeg'

const Error = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <img src={error}></img>
            
        </div>
    );
};

export default Error;