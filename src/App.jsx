import React from 'react';
import Navigation from './header/navigation/Navigation'
import Main from './main/Main'
import Popup from './popup/Popup';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: true,
        }
    }

    showPopup = () => {
        this.setState({
            popup: !this.state.popup,
        })
    }

    render() {
        return (
            <>
                <Navigation showPopup={this.showPopup} />
                <Main />
                <Popup
                    newClass={this.state.popup
                        ? 'display'
                        : ''
                    }
                />
            </>
        )
    }
}

export default App;