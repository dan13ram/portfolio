import React from 'react';

class ImageTile extends React.Component {

    disableRightClick = (event) => {
        event.preventDefault();
    }

    render () {
        let imageUrl = require('../../../../assets/img/' + this.props.url);
        return (
            <div className="tile-container"> 
                <img onContextMenu={this.disableRightClick} className="img-tile" src={imageUrl} alt={this.props.url} /> 
            </div>
        );
    }
}

export default ImageTile;

