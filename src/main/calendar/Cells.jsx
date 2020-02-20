import React from 'react';

const Cells = () => {
    let arr = Array(7).fill('0');

    return (
        <>
            {arr.map(x => x = <div className='emptyCell'></div>)}
        </>
    )
}

export default Cells;