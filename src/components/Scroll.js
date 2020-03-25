import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borderRadius: '25px'}} className='w-90 shadow-3 container pa3 mb5'>
            {props.children}
        </div>
    )
};

export default Scroll;