import React from 'react';
import Cells from './Cells'

const Rows = ({ week, showPopup }) => {
    let arr = Array(24).fill('0');

    return (
        <div className="calendar-visualization">
            {arr.map((elem, index) => {
                return (
                    < div className='emptyRow'>
                        <Cells
                            week={week}
                            showPopup={showPopup}
                            time={index < 10
                                ? `0${index + 1}:00`
                                : `${index + 1}:00`}
                        />
                    </div>
                )
            })}
        </div >
    )
}

export default Rows;