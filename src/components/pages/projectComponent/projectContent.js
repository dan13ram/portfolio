import React from 'react';
import VideoTile from './templates/videoTile';
import ImageTile from './templates/imageTile';
import Foliage from './templates/foliage';

function ProjectContent (props) {
    let renderContent = (content) => {
        return content.map((item, i) => {
            if (item.type === "video" ) {
                return <VideoTile key={i.toString()} url={item.url}/>
            }
            else if (item.type === "image" ) {
                return <ImageTile key={i.toString()} url={item.url}/>
            } 
            else if (item.type === "foliage" ) {
                return <Foliage key={i.toString()} content={item}/>
            }
            return "";
        })
    }
    return (
        <div className="project-content"> 
            {
                renderContent(props.content)
            }
        </div> 
    )
}

export default ProjectContent;
