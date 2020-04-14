import React from 'react';

class Image extends React.Component {
    render () {
        return (
            <div className="img-container"> 
                <div className="img-overlay" onClick={this.props.click}></div>
                <img src={this.props.url} alt={this.props.url.toString()} /> 
            </div>
        );
    }
}

export default Image;
