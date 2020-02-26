import React from 'react';
import Header from '../Header';
import RedLine from '../../redLine/RedLine';
import ActiveEvent from '../../activeEvents/ActiveEvent'
import './navigation.scss'

let arr = Array(7).fill('0');
let findMargin = (new Date() + '').split(' ')[4]

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header
                    getPrevWeek={this.props.getPrevWeek}
                    getNextWeek={this.props.getNextWeek}
                    todayButton={this.props.todayButton}
                    showPopup={this.props.showPopup}
                    currentMonthAndYear={this.props.currentMonthAndYear}
                />
                <nav className="days-navigation">
                    <div className="week">
                        {arr.map((elem, index) => {
                            return (
                                <Day
                                    key={Math.random()}
                                    array={this.props.array}
                                    index={index}
                                    getMonday={this.props.getMonday}
                                    showPopup={this.props.showPopup}
                                />
                            )
                        })}
                    </div>
                </nav>
            </>
        )
    }
}

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

export default Navigation;