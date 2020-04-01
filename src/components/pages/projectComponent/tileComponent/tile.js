import React from 'react';
import VideoTile from './videoTile';
import ImageTile from './imageTile';

function Tile(props) {
    let item = props.item;
    if (item.type === "video" ) {
        return <VideoTile url={item.url}/>
    } else if (item.type === "image") {
        return <ImageTile url={item.url}/>
    }
}

export default Tile;

