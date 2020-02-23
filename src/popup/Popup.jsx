import React from 'react';
import './popup.scss';

const Popup = ({ newClass }) => {
    return (
        <section className={`popup ${newClass}`}>
            <form className="popup__form">
                <button className="close material-icons">
                    close
                </button>
                <input name="title" className="input__name" type="text" placeholder="Add title" />
                <div className="color-picker">
                    <label className="color-picker_label">
                        <span className="color-picker_label-text">Select a color</span>
                        <input className="event__color-picker" type="color" name="color" value="#4183f1" />
                    </label>
                </div>

                <div className="date-block ">
                    <i className="Tiny material-icons">access_time</i>
                    <input className="start-date input-style" type="date" name="trip-start" value="2019-12-23"
                        max="2020-12-23 " />

                    <input type="time" className="start-time time-list input-style " name="start-time" value="11:11" />
                    <input type="time" className="end-time time-list input-style " name="end-time" value="11:11" />

                    <input className="end-date input-style" type="date" name="trip-start" value="2019-12-23" max="2020-12-23 " />
                </div>
                <div className="description ">
                    <i className="Tiny material-icons ">format_align_left
            </i>
                    <textarea className="description-input " name="text" cols="42 " rows="4 "
                        placeholder="Add description"></textarea>
                </div>
                <div className="control ">
                    <button className="delete-event ">
                        <i className="Tiny material-icons material-icons-delete">delete</i>
                    </button>
                    <button type="submit" className="submit-button ">Save</button>
                </div>

            </form>
            <span className="event__name "></span>
            <span className="event__description "></span>

        </section>
    )
}

export default Popup;