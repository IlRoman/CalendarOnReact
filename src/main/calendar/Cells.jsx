import React from 'react';
import moment from 'moment';

let arr = Array(7).fill('0');

class Cells extends React.Component {
    constructor(props) {
        super(props);
    }

    getDate = () => {
        let startOfWeek = moment().startOf('week').toDate();
        return new Date(startOfWeek.setDate(startOfWeek.getDate() + this.props.week)).getDate();
    }

    render() {
        return (
            <>
                {arr.map((elem, index) => {
                    return (
                        <div
                            className='emptyCell'
                            date={this.getDate() + index}
                            onClick={this.props.showPopup}
                        >
                        </div>
                    )
                }
                )}
            </>
        )
    }
}

export default Cells;