import React from 'react';
import './Card.css';

const Card = ({ name, email, city, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 cell'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 className='code ttu blue-font'>{name}</h2>
                <p className='code blue-font i'>{email}</p>
                <p className='code blue-font i'>{city}</p>
            </div>
        </div>
    )
}




export default Card;