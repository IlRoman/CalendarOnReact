import React from 'react'
import RedLine from '../../redLine/RedLine';
import ActiveEvent from '../../activeEvents/ActiveEvent'

let findMargin = (new Date() + '').split(' ')[4]

class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    findActiveEvents = () => {
        let newArr = this.props.array.filter(event => new Date(event.startDate).getDate() == this.getDay().getDate())
        let activeEvents = newArr.map((event) => {
            return (<ActiveEvent
                key={Math.random()}
                _id={event._id}
                color={event.color}
                text={event.text}
                startDate={event.startDate}
                startTime={event.startTime}
                endTime={event.endTime}
                endDate={event.endDate}
                showPopup={this.props.showPopup}
            />)
        })
        return activeEvents
    }

    getDay = () => {
        return new Date((this.props.getMonday()).setDate(this.props.getMonday().getDate() + this.props.index));
    }

    marginTop = () => {
        return `${findMargin.split(':')[0] * 60 + +(findMargin.split(':')[1])}`
    }

    render() {
        return (
            <div className="day">
                <div className="day-name">{(this.getDay() + '').split(' ')[0]}</div>
                <div className="day-number">{(this.getDay() + '').split(' ')[2]}</div>
                {this.findActiveEvents()}
                {new Date().getDate() === new Date(this.props.getMonday().setDate(this.props.getMonday().getDate() + this.props.index)).getDate()
                    ? <RedLine top={this.marginTop()} />
                    : ''
                }
            </div>
        )
    }
}

export default Day;