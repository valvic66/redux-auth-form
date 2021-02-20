import React from 'react';
import classnames from 'classnames';

export const Message = ({ className, message, isMessageError }) => {
    const messageClassNames = classnames(className, { 'error-msg': isMessageError });

    return (
        <div className={messageClassNames}>
            <p>{message}</p>
        </div>
    );
};