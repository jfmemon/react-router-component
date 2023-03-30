import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div>
            <h1>This is countries page.</h1>
            {
                countries.map(country => <Country
                key={country.name.common}
                country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;