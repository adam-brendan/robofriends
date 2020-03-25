import React from 'react';
import '../styles.css';

const Card = ({ name, email, city, id}) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-3 cell'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 className='avenir ttu'>{name}</h2>
                <p className='avenir'>{email}</p>
                <p className='avenir i'>{city}</p>
            </div>
        </div>
    )
}




export default Card;