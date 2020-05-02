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
                key={event.id}
                id={event.id}
                color={event.color}
                title={event.title}
                description={event.description}
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

    currentDayStyle = () => {
        if ((this.getCurrentDay() + '').split(' ')[2] === (new Date() + '').split(' ')[2] &&
            ((this.getCurrentDay() + '').split(' ')[0]) === (new Date() + '').split(' ')[0]) {
            return 'current-day'
        } else return ''
    }

    render() {
        return (
            <div className="day">
                <div className="day-name">{(this.getCurrentDay() + '').split(' ')[0]}</div>
                <div className={`day-number ${this.currentDayStyle()}`}>{(this.getCurrentDay() + '').split(' ')[2]}</div>
                {this.findActiveEvents()}
                {this.getDayFunc()}
            </div>
        )
    }
}

export default Day;