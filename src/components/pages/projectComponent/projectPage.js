import React, { useRef, useEffect } from 'react';
import Tile from './tileComponent/tile';
import { useParams, Redirect } from 'react-router-dom';

import { data } from '../../../constants';

function ProjectPage (props) {
    const projectPage = useRef();
    useEffect(() => {
        projectPage.current && projectPage.current.scrollIntoView();
    }, []);

    let { id } = useParams();
    if (id in data) {
        let work = data[id];
        let workDescription = work.description.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
        return (
            <div className="project-page" ref={projectPage}> 
                <div className="project-header"> 
                    <div className="project-title"> 
                        <span> {work.title} </span>
                    </div>
                    <div className="project-subtitle"> 
                        <span> {work.subtitle} </span>
                    </div>
                    <div className="project-year"> 
                        <span> {work.year} </span>
                    </div>
                    <div className="project-description">
                        <span> {workDescription} </span>
                    </div>
                </div> 
                <div className="project-content"> 
                {
                    work.content.map((item, i) => (
                        <Tile key={i.toString()} item={item} />
                    ))
                }
                </div> 
            </div>
        );
    } else {
        return <Redirect to="/"/>;
    }

}

export default ProjectPage;

