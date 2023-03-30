import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    const navigate = useNavigate();
    const getNavigate = () => {
        navigate(`/countries/${country.name.common}[0]`)
    }
    return (
        <div>
            <h3>Country name: {country.name.common}</h3>
            <button onClick={getNavigate}>Show details</button>
        </div>
    );
};

export default Country;