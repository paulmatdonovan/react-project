import React from 'react';

const Usercard = ({ username, accountType }) => {
    return (
        <div className="usercard">
            <h2>{username}</h2>
            <p>{accountType}</p>
        </div>
    );
};

export default Usercard;