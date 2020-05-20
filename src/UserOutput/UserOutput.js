import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>This is my Name: {props.name}</p>
            <p>This is my middle name: {props.name}</p>
        </div>
    )
}

export default userOutput;