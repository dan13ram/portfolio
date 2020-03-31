import React from 'react';
import { Link } from "react-router-dom";

//images
import {ReactComponent as Instagram} from '../../../assets/svg/instagram.svg';
import {ReactComponent as Vimeo} from '../../../assets/svg/vimeo.svg';

class WorksList extends React.Component {

    render () {
        return (
            <div className="works-list"> 
                <span id="works-list-header"> WORK </span>
                <hr />
                <div className="work-items">
                    <WorkItem title="six elements" value="sixelements"/>
                    <WorkItem title="foliage collage project" value="foliage"/>
                    <WorkItem title="trance" value="trance"/>
                    <WorkItem title="six elements" value="sixelements"/>
                    <WorkItem title="foliage collage project" value="foliage"/>
                    <WorkItem title="trance" value="trance"/>
                    <WorkItem title="six elements" value="sixelements"/>
                    <WorkItem title="foliage collage project" value="foliage"/>
                    <WorkItem title="trance" value="trance"/>
                    <WorkItem title="six elements" value="sixelements"/>
                    <WorkItem title="foliage collage project" value="foliage"/>
                    <WorkItem title="trance" value="trance"/>
                    <WorkItem title="six elements" value="sixelements"/>
                    <WorkItem title="foliage collage project" value="foliage"/>
                    <WorkItem title="trance" value="trance"/>
                </div>
                <hr />
                <FollowLinks />
            </div>
        );
    }
}

function WorkItem(props) {

    return  (
        <div className="workitem">
            <Link to={"/project/"+props.value}> {props.title} </Link>
        </div>
    );
}

function FollowLinks(props) {

    return (
        <div className="follow-links">
            <a href="https://instagram.com/littlehoodedcreature" id="instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="follow-img" id="instagram-img" />
            </a>
            <a href="https://vimeo.com/littlehoodedcreature" id="vimeo" target="_blank" rel="noopener noreferrer">
                <Vimeo className="follow-img" id="vimeo-img" />
            </a>
        </div>
    );
}

export default WorksList;

