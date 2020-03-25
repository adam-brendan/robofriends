import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', display: 'flex', flexWrap: 'wrap'}}>
            {props.children}
        </div>
    )
};

export default Scroll;