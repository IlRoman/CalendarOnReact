import React from 'react';
import Navigation from './header/navigation/Navigation'
import Main from './main/Main'
import Popup from './popup/Popup';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            week: 0,
            eventTime: '',
            eventDate: '',
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

    todayButton = () => {
        this.setState({
            week: 0,
        })
    }

    currentMonthAndYear = () => {
        let startOfWeek = moment().startOf('week').toDate();
        startOfWeek = new Date(startOfWeek.setDate(startOfWeek.getDate() + this.state.week)) + ''
        let endOffWeek = moment().endOf('week').toDate();
        endOffWeek = new Date(endOffWeek.setDate(endOffWeek.getDate() + this.state.week)) + ''
        return `${startOfWeek.split(' ')[1]} ${startOfWeek.split(' ')[3]} - ${endOffWeek.split(' ')[1]} ${endOffWeek.split(' ')[3]}`
    }

    showPopup = (time, date) => {
        this.setState({
            popup: !this.state.popup,
            eventTime: time,
            eventDate: date,
        })
    }

    render() {
        return (
            <>
                <Navigation
                    getMonday={this.getMonday}
                    showPopup={this.showPopup}
                    getPrevWeek={this.getPrevWeek}
                    getNextWeek={this.getNextWeek}
                    todayButton={this.todayButton}
                    showPopup={this.showPopup}
                    currentMonthAndYear={this.currentMonthAndYear()}
                />
                <Main week={this.state.week} showPopup={this.showPopup} />
                {this.state.popup
                    ? <Popup
                        eventTime={this.state.eventTime}
                        eventDate={this.state.eventDate}
                    />
                    : ''}
            </>
        )
    }
}

export default App;