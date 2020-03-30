import React from 'react';
import ReactPlayer from 'react-player';

class VideoTile extends React.Component {
    //constructor (props) {
    //    super(props);
    //}

    render () {
        return (
            <div className="tile-container"> 
                <div className="video-tile"> 
                    <ReactPlayer
                        url={this.props.url}
                        className='react-player'
                        playing={false}
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        );
    }
}

export default VideoTile;

