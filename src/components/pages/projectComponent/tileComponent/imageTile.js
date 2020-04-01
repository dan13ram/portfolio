import React from 'react';

class ImageTile extends React.Component {

    disableRightClick = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className="tile-container"> 
                <img onContextMenu={this.disableRightClick} className="img-tile" src={this.props.url} alt={this.props.url.toString()} /> 
            </div>
        );
    }
}

export default ImageTile;

