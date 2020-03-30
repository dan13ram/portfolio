import React from 'react';

class ImageTile extends React.Component {
    //    constructor (props) {
    //        super(props);
    //    }

    disableRightClick = (event) => {
        event.preventDefault();
    }
    render () {
        return (
            <div className="tile-container"> 
                <img onContextMenu={this.disableRightClick} className="img-tile" src={require('../../assets/img/' + this.props.url)} alt={this.props.url} /> 
            </div>
        );
    }
}

export default ImageTile;

