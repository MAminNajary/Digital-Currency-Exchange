import React from 'react';

import spinner from '../assets/img/Spinner-0.7s-154px.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loading' />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;