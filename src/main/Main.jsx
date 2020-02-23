import React from 'react';
import Rows from './calendar/Rows'
import Sidebar from './sidebar/Sidebar'
import './main.scss';

const Main = ({ week, showPopup }) => {
    return (
        <section className="main">
            <Sidebar />
            <Rows week={week} showPopup={showPopup} />
        </section>
    )
}

export default Main;