import React from 'react';
import Header from '../Header';
import RedLine from '../../redLine/RedLine';
import './navigation.scss'

let arr = Array(7).fill('0');
let x = (new Date() + '').split(' ')[4]

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
                            return <Day
                                index={index}
                                getMonday={this.props.getMonday}
                            />
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

    getDay = () => {
        return new Date((this.props.getMonday()).setDate(this.props.getMonday().getDate() + this.props.index)) + '';
    }

    marginTop = () => {
        return `${x.split(':')[0] * 60 + +(x.split(':')[1])}`
    }

    render() {
        return (
            <div className="day">
                <div className="day-name">{this.getDay().split(' ')[0]}</div>
                <div className="day-number">{this.getDay().split(' ')[2]}</div>
                {new Date().getDate() + '' == this.getDay().split(' ')[2]
                    ? <RedLine top={this.marginTop()} />
                    : <></>
                }
            </div>
        )
    }
}

export default Navigation;