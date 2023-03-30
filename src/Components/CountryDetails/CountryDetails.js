import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useLoaderData();
    console.log(countryDetails);
    return (
        <div>
            <h1>This is country about page.</h1>
            <h3>Name: </h3>
        </div>
    );
};

export default CountryDetails;