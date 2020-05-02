import React from 'react';
import Navigation from './header/navigation/Navigation'
import Main from './main/Main'
import Popup from './popup/Popup';
import moment from 'moment';
import { getEventsList, deleteEvent, postToServer } from './gateways/gateways'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            week: 0,
            eventTime: '',
            eventDate: '',
            array: [],
            date: '',
        }
    }

    componentDidMount() {
        getEventsList()
            .then(result => {
                this.setState({
                    array: result
                })
            })
            .catch(() => alert('Internal Server Error. Can\'t display events'))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.popup !== prevState.popup) {
            getEventsList()
                .then(result => {
                    this.setState({
                        array: result
                    })
                })
                .catch(() => alert('Internal Server Error. Can\'t display events'))
        }
    }

    createTask = (formData) => {
        postToServer(formData)
            .then(getEventsList()
                .then(result => {
                    this.setState({
                        array: result,
                        popup: !this.state.popup,
                    })
                })
                .catch(() => alert('Internal Server Error. Can\'t display events'))
            )
    }

    delete = (id) => {
        deleteEvent(id)
            .then(getEventsList()
                .then(result => {
                    this.setState({
                        array: result,
                        popup: !this.state.popup,
                    })
                })
                .catch(() => alert('Internal Server Error. Can\'t display events'))
            )
    }

    getMonday = () => {
        let startOfWeek = moment().startOf('week').toDate();
        return new Date(startOfWeek.setDate(startOfWeek.getDate() + this.state.week));
    }

    getActualDate = (eventDate, index) => {
        let startOfWeek = moment().startOf('week').toDate();
        let date = new Date(startOfWeek.setDate(startOfWeek.getDate() + this.state.week + index)) + ''
        let month = new Date(date).getMonth() + 1
        return `${date.split(' ')[3]}-${month <= 9 ? "0" + month : month}-${eventDate}`
    }

    getPrevWeek = () => {
        this.setState({
            week: this.state.week - 7,
            date: this.getActualDate(this.state.eventDate, 0)
        })
    }

    getNextWeek = () => {
        this.setState({
            week: this.state.week + 7,
            date: this.getActualDate(this.state.eventDate, 0),
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

    showPopup = (time, date, id, index) => {
        const eventDate = date <= 9 ? `0${date}` : date;
        const eventTime = time === '010:00' ? '10:00' : time
        this.setState({
            date: this.getActualDate(eventDate, index),
            eventDate,
            eventTime,
            id: id,
            popup: !this.state.popup,
        })
    }

    closePopup = () => {
        this.setState({
            popup: !this.state.popup,
        })
    }

    render() {
        return (
            <>
                <Navigation
                    array={this.state.array}
                    getMonday={this.getMonday}
                    showPopup={this.showPopup}
                    getPrevWeek={this.getPrevWeek}
                    getNextWeek={this.getNextWeek}
                    todayButton={this.todayButton}
                    currentMonthAndYear={this.currentMonthAndYear()}
                />
                <Main week={this.state.week} showPopup={this.showPopup} />
                {this.state.popup && <Popup
                    createTask={this.createTask}
                    eventTime={this.state.eventTime}
                    id={this.state.id}
                    delete={this.delete}
                    date={this.state.date}
                    closePopup={this.closePopup}
                />}
            </>
        )
    }
}

export default App;