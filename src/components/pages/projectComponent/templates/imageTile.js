import React from 'react';
import Image from './image';

class ImageTile extends React.Component {
    render () {
        return (
            <div className="img-tile"> 
                <Image url={this.props.url} />
            </div>
        );
    }
}

export default ImageTile;
