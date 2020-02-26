import React from 'react';
import Header from '../Header';
import Day from './Day'
import './navigation.scss'

let arr = Array(7).fill('0');

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

export default Navigation;