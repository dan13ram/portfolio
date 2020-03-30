import React from 'react';
import Tile from './tile';
import { useParams, Redirect } from 'react-router-dom';

//json data
import * as data from '../../assets/json/data.json'


function ProjectPage (props) {

    let { id } = useParams();
    if (id in data.default ) {
        let work = data.default[id];
        return (
            <div className="project-page-container"> 
                <div className="project-page"> 
                    <div className="project-title"> 
                        <span> {work.title} </span>
                    </div>
                    <div className="project-description">
                        <span> {work.description} </span>
                    </div>
                </div> 
                {work.content.map(function (item, i){ return (<Tile key={i.toString()} type={item.type} url={item.url} />); } )}
            </div>
        );
    } else {

        return <Redirect to="/"/>;
    }

}

export default ProjectPage;

