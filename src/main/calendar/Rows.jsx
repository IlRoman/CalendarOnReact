import React from 'react';
import Cells from './Cells'

let arr = Array(24).fill('0');

const Rows = ({ week, showPopup }) => {

    return (
        <div className="calendar-visualization">
            {arr.map((elem, index) => {
                return (
                    < div className='emptyRow' key={Math.random()}>
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