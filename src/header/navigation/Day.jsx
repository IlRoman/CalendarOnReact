import React from 'react'
import RedLine from '../../redLine/RedLine';
import ActiveEvent from '../../activeEvents/ActiveEvent'

let findMargin = (new Date() + '').split(' ')[4]

class Day extends React.Component {
    findActiveEvents = () => {
        let newArr = this.props.array.filter(event => new Date(event.startDate).getDate() === this.getCurrentDay().getDate())
        newArr = newArr.filter(event => (new Date(event.startDate) + '').split(' ')[1] === (this.getCurrentDay() + '').split(' ')[1])
        let activeEvents = newArr.map((event) => {
            return (<ActiveEvent
                key={Math.random()}
                id={event.id}
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

    getCurrentDay = () => {
        return new Date((this.props.getMonday()).setDate(this.props.getMonday().getDate() + this.props.index));
    }

    marginTop = () => {
        return `${findMargin.split(':')[0] * 60 + +(findMargin.split(':')[1])}`
    }

    getDayFunc = () => {
        return (new Date().getDate() === new Date(this.props.getMonday().setDate(this.props.getMonday().getDate() + this.props.index)).getDate() &&
            new Date().getDay() === new Date(this.props.getMonday().setDate(this.props.getMonday().getDate() + this.props.index)).getDay()
            ? <RedLine top={this.marginTop()} />
            : ''
        )
    }

    render() {
        return (
            <div className="day">
                <div className="day-name">{(this.getDayFunc() + '').split(' ')[0]}</div>
                <div className="day-number">{(this.getDayFunc() + '').split(' ')[2]}</div>
                {this.findActiveEvents()}
                {this.getDayFunc()}
            </div>
        )
    }
}

export default Day;