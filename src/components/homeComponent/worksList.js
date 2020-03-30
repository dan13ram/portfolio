import React from 'react';
import { useHistory } from "react-router-dom";

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

    let backgroundStyle = {
        backgroundImage:`url(${props.cover})` 
    };
    const history = useHistory();

    function displayPage() {
        history.push("/display/"+props.value);
    }

    return  (
        <div className="workitem" onClick={displayPage}>
            <span> {props.title} </span>
        </div>
    );
}

export default WorksList;

