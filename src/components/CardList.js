import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    if (true) {
        throw new Error('Nooooooo!');
    }
    return (
        <>
            {robots.map((robot, i) => {
                return <Card 
                    key={i} 
                    id={robot.id} 
                    name={robot.name} 
                    email={robot.email}/>
                })
            }
        </>
    )
}

export default CardList;