import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <p>
                The purpose of this project is to explore the use of docker, in combination with exress, postgres and redis
                <Link to="/">Go to Fibo Calculator</Link>
            </p>
        </div>
    )
};