import React from 'react';
import Cells from './Cells'

const Rows = () => {
    let arr = Array(24).fill('0');

    return (
        <div className="calendar-visualization">
            {
                arr.map(x => x = <div className='emptyRow'>
                    {<Cells />}
                </div>)
            }
        </div>
    )
}

export default Rows;