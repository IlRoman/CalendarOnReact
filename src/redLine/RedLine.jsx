import React from 'react';
import './redline.scss';

const RedLine = ({ top }) => {
    return (
        <div className="redLine" style={{ marginTop: `${+top + 100}px` }}>
            <div className="redLine-round"></div>
            <div className="redLine-line"></div>
        </div >
    )
}

export default RedLine;