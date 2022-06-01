import React from 'react';
import "./Countries.css" ;

const Countries = (props) => {
    // console.log(props.country)
    const {name,nativeName, region, subregion, flag, capital, population} = props.country
    return (
        <div className='container'>
            <div>
            <div className='image'>
                <img src={flag} alt="" />
            </div>
            <div className='text-container'>
                <h3>Name of Country: {name}</h3>
                <p>Name of Capital:{capital}</p>
                <p>Native Name: {nativeName}</p>
                <p>In this country region:{region} </p>
                <p>In this country SubRegion:{subregion} </p>
                <p>In this country Population: {population}</p>
            </div>
            </div>
        </div>
    );
};

export default Countries;