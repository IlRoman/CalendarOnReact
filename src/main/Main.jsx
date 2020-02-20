import React from 'react';
import Rows from './calendar/Rows'
import Sidebar from './sidebar/Sidebar'
import './main.scss';

const Main = () => {
    return (
        <section className="main">
            <Sidebar />
            <Rows />
        </section>
    )
}

export default Main;