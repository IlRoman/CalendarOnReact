import React from 'react';
import moment from 'moment';

let arr = Array(7).fill('0');

class Cells extends React.Component {
    getDate = (index) => {
        let startOfWeek = moment().startOf('week').toDate();
        startOfWeek = new Date(startOfWeek.setDate(startOfWeek.getDate() + this.props.week + index)).getDate();
        this.props.showPopup(this.props.time, startOfWeek, '', index)
    }

    render() {
        return (
            <>
                {arr.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            className='emptyCell'
                            onClick={() => this.getDate(index)}
                        />
                    )
                })}
            </>
        )
    }
}

export default Cells;