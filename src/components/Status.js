import React from 'react';

export const Status = ({ status }) => {
    if(status === 'Login error!') {
        return (
            <div style={{ color: 'red' }}>
                <p>{status}</p>
            </div>
        );
    };

    return <p>{status}</p>;
};