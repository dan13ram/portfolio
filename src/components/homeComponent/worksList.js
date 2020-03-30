import React from 'react';
import { Link } from "react-router-dom";

class WorksList extends React.Component {

    render () {
        return (
            <div className="works-list"> 
                <WorkItem title="six elements" value="sixelements"/>
                <WorkItem title="foliage collage project" value="foliage"/>
                <WorkItem title="trance" value="trance"/>
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

export default WorksList;

