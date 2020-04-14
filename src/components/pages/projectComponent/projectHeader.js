import React from 'react';

function ProjectHeader (props) {
    return (
        <div className="project-header"> 
            <div className="project-title"> 
                <span> {props.title} </span>
            </div>
            <br/>
            <div className="project-subtitle"> 
                <span> {props.subtitle} </span>
            </div>
            <div className="project-year"> 
                <span> {props.year} </span>
            </div>
            <div className="project-description">
                {
                    props.description && props.description.split('\n').map((item, i) => <p key={i}>{item}</p>)
                }
            </div>
        </div> 
    )
}

export default ProjectHeader;
