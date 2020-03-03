import React from 'react';

const Sidebar = () => {
    let arr = Array(24).fill('0');

    return (
        <div className="timing" key={Math.random()}>
            {arr.map((elem, index) =>
                elem = <div className="timing__blocks">
                    <span className="clock">
                        {index + 1}
                    </span>
                </div>)}
        </div>
    )
}

export default Sidebar;