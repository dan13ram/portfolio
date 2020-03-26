import React from 'react';

//images
import scroll from '../../assets/img/scroll.png';

class WelcomePage extends React.Component {
    handleOnClick = (event) => {
        if(this.props.content.current) {
            this.props.content.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }
    render () {
        return (
            <div className="welcome-page"> 
                <span id="welcome-content"> Hi, There! </span>
                <div id="scroll-container" onClick={this.handleOnClick}>
                    <img src={scroll} id="scroll-img" alt="scroll" />
                </div>
            </div>
        );
    }
}

export default WelcomePage;
