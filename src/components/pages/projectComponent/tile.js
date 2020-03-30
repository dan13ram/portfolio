import React from 'react';
import VideoTile from './videoTile';
import ImageTile from './imageTile';

function Tile(props) {
    if (props.type === "video" ) {
        return <VideoTile url={props.url}/>
    } else if (props.type === "image") {
        return <ImageTile url={props.url}/>
    }
}

export default Tile;

