import React, { useRef, useEffect } from 'react';
import ProjectHeader from './projectHeader';
import ProjectContent from './projectContent';
import { useParams, Redirect } from 'react-router-dom';

import { data } from '../../../constants';

function ProjectPage (props) {
    const projectPage = useRef();
    let { id } = useParams();

    useEffect(() => {
        const app = document.getElementsByClassName("app")[0];
        app.style.scrollSnapType = "none";
        return function cleanup() {
        app.style.scrollSnapType = "y mandatory";
        };
    }, []);


    useEffect(() => {
        projectPage.current && projectPage.current.scrollIntoView();
    }, [id]);

    if (id in data) {
        let work = data[id];
        return (
            <div className="project-page" ref={projectPage}> 
                <ProjectHeader title={work.title} subtitle={work.subtitle} year={work.year} description={work.description} />
                <ProjectContent content={work.content} />
            </div>
        );
    } else {
        return <Redirect to="/"/>;
    }

}

export default ProjectPage;
