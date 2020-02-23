import React from 'react';
import './popup.scss';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#4183f1',
            startDate: this.props.eventDate,
            startTime: this.props.eventTime,
            endTime: this.props.eventTime,
            endDate: this.props.eventDate,
            text: '',
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

    render() {
        return (
            <section className={`popup ${this.props.newClass}`}>
                <form className="popup__form">
                    <button className="close material-icons">
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

                        <input className="end-date input-style" type="date" name="endTime" value={this.state.endTime} onChange={this.handleChange} />
                    </div>
                    <div className="description ">
                        <i className="Tiny material-icons ">format_align_left
            </i>
                        <textarea className="description-input " name="text" cols="42 " rows="4 "
                            placeholder="Add description" onChange={this.handleChange} value={this.state.text}></textarea>
                    </div>
                    <div className="control ">
                        <button className="delete-event ">
                            <i className="Tiny material-icons material-icons-delete"></i>
                        </button>
                        <button type="submit" className="submit-button ">Save</button>
                    </div>

                </form>
                <span className="event__name "></span>
                <span className="event__description "></span>

            </section>
        )
    }
}

export default Popup;