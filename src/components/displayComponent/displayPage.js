import React from 'react';
import Tile from './tile';
import { useParams, Redirect } from 'react-router-dom';

//json data
import * as data from '../../assets/json/data.json'


function DisplayPage (props) {

    let { id } = useParams();
    if (id in data.default ) {
        let work = data.default[id];
        return (
            <div className="display-page-container"> 
                <div className="display-page"> 
                    <div className="display-title"> 
                        <span> {work.title} </span>
                    </div>
                    <div className="display-description">
                        <span> {work.description} </span>
                    </div>
                </div> 
                {work.content.map(item => <Tile type={item.type} url={item.url} />)}
            </div>
        );
    } else {

        return <Redirect to="/"/>;
    }

}

export default DisplayPage;

