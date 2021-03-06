import React from 'react';
import './activeEvent.scss'

class ActiveEvent extends React.Component {
    getHeight = () => {
        let a = +this.props.endTime.split(':')[0] - +this.props.startTime.split(':')[0]
        let b = +this.props.endTime.split(':')[1] - +this.props.startTime.split(':')[1]
        return (a * 60 + b)
    }

    getPosition = () => {
        console.log(this.props)
        return +this.props.startTime.split(':')[0] * 60 + 100
    }

    render() {
        return (
            <div
                className='active_event'
                style={{
                    height: this.getHeight(),
                    backgroundColor: this.props.color,
                    marginTop: this.getPosition()
                }}
                onClick={() => this.props.showPopup('00:00', '2020-02-02', this.props.id)}
            >
                {this.props.title}
                <p>{this.props.description}</p>
            </div >
        )
    }
}

export default ActiveEvent;