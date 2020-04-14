import React from 'react';
import ReactPlayer from 'react-player';

class VideoTile extends React.Component {

    constructor(props) {
        super(props);
        this.player = React.createRef();
    }

    ready = (event) => {
        this.player.current.classList.add("ready");
    }

    render () {
        return (
            <div className="video-tile-container">
                <div className="video-tile"> 
                    <div className="video-tile-inner" ref={this.player}> 
                        <ReactPlayer
                            url={this.props.url}
                            className='react-player'
                            playing={false}
                            width='100%'
                            height='100%'
                            onReady={this.ready}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoTile;

