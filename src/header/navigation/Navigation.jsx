import React from 'react';
import moment from 'moment';
import Header from '../Header';
import './navigation.scss'

let arr = Array(7).fill('0');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: 0,
        }
    }

    getMonday = () => {
        let startOfWeek = moment().startOf('week').toDate();
        return new Date(startOfWeek.setDate(startOfWeek.getDate() + this.state.week));
    }

    getPrevWeek = () => {
        this.setState({
            week: this.state.week -= 7,
        })
    }

    getNextWeek = () => {
        this.setState({
            week: this.state.week += 7,
        })
    }

    render() {
        return (
            <>
                <Header getPrevWeek={this.getPrevWeek} getNextWeek={this.getNextWeek} />
                <nav className="days-navigation">
                    {arr.map((elem, index) => { return <Day index={index} getMonday={this.getMonday} /> })}
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

    render() {
        return (
            <div className="day">
                <div className="day-name">{this.getDay().split(' ')[0]}</div>
                <div className="day-number">{this.getDay().split(' ')[2]}</div>
            </div>
        )
    }
}

export default Navigation;