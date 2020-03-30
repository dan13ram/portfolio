import React from 'react';

class WelcomeSlide extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false,
        }
        this.slideRef =  React.createRef();
    }

    signalStart = (event) =>  {
        this.setState({
            open: !this.state.open,
        });
    }

    signalDone = (event) => {
        this.slideRef.current.style.display = "none";
    }


    render () {
        return (
            <div className={this.state.open===true ? "welcome-slide open" : "welcome-slide"} onClick={this.signalStart} onTransitionEnd={this.signalDone} ref={this.slideRef}> 
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
