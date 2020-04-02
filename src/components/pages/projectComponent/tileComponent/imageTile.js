import React from 'react';

class ImageTile extends React.Component {

    disableRightClick = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className="tile"> 
                <div className="img-tile"> 
                <img onContextMenu={this.disableRightClick} src={this.props.url} alt={this.props.url.toString()} /> 
            </div>
            </div>
        );
    }
}

export default ImageTile;

