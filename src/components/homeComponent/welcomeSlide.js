import React from 'react';

class WelcomeSlide extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            done: false,
        }
    }

    signalDone = (event) =>  {
        this.setState({
            done: !this.state.done,
        });
    }


    render () {
        return (
            <div className={this.state.done===true ? "welcome-slide done" : "welcome-slide"} onClick={this.signalDone}> 
                <span id="welcome-content">
                    Hi, There!
                    <br/>
                    Click anywhere to
                    <br />
                    enter
                    <br />
                    the world of 
                    <br />
                    littlehoodedcreature!
                </span>
            </div>
        );
    }
}

export default WelcomeSlide;
