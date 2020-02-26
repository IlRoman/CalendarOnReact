import React from 'react';
import './popup.scss';
import { postToServer } from '../gateways/gateways.js';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#4183f1',
            text: '',
            startDate: '2020-02-26',
            startTime: '00:00',
            endTime: '00:00',
            endDate: '2020-02-26',
        }
    }

    handleChange = (element) => {
        const { name, value } = element.target
        this.setState({
            [name]: value,
        });
    }

    createDate = () => {
        alert(this.props.popupDate)
    }

    endTime = () => {
        let endTimeArr = this.props.eventTime.split('')
        if (+endTimeArr[1] == 9) {
            endTimeArr[0] = +endTimeArr[0] + 1;
            endTimeArr[1] = 0;
        } else {
            endTimeArr[1] = +endTimeArr[1] + 1;
        }
        return endTimeArr.join('')
    }

    startDate = (date) => {
        return `2020-02-${date}`
    }

    render() {
        return (
            <section className={`popup ${this.props.newClass}`}>
                <div className="popup__form">
                    <button className="close material-icons" onClick={this.props.closePopup}>
                        close
                    </button>
                    <input name="title" className="input__name" type="text" placeholder="Add title" />
                    <div className="color-picker">
                        <label className="color-picker_label">
                            <span className="color-picker_label-text">Select a color</span>
                            <input className="event__color-picker" type="color" name="color" value={this.state.color} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="date-block ">
                        <i className="Tiny material-icons">access_time</i>
                        <input className="start-date input-style" type="date" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                        <input type="time" className="start-time time-list input-style " name="startTime" value={this.state.startTime} onChange={this.handleChange} />
                        <input type="time" className="end-time time-list input-style " name="endTime" value={this.state.endTime} onChange={this.handleChange} />
                        <input className="end-date input-style" type="date" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
                    </div>
                    <div className="description ">
                        <i className="Tiny material-icons ">format_align_left</i>
                        <textarea className="description-input " name="text" cols="42 " rows="4 "
                            placeholder="Add description" onChange={this.handleChange} value={this.state.text}></textarea>
                    </div>
                    <div className="control ">
                        <button
                            className="delete-event"
                            onClick={() => this.props.delete(this.props.id)}
                        >
                            delete
                        </button>
                        <button
                            className="submit-button "
                            onClick={() => {
                                postToServer(this.state)
                                    .then(this.props.closePopup());
                            }}>
                            Save
                            </button>
                    </div>
                </div>
            </section >
        )
    }
}

export default Popup;