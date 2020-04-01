import React from 'react';
import { useHistory } from "react-router-dom";

import { data } from '../../../../constants';

class WorksDisplay extends React.Component {

    render () {
        return (
            <div className="work-display"> 
                {
                    Object.keys(data).map((item, i) => (
                        <WorkView key={i.toString()} value={item}/>
                    ))
                }
            </div>
        );
    }
}

function WorkView(props) {

    let work = data[props.value];

    let backgroundStyle = {
        backgroundImage:`url(${work.cover})` 
    };
    const history = useHistory();

    function openPage() {
        history.push("/project/"+work.url);
    }

    return  (
        <div className="workview-container" style={backgroundStyle}> 
            <div className="workview" onClick={openPage}>
                <div className="workview-content">
                <div className="work-title">
                    <span> {work.title} </span>
                </div>
                <div className="work-subtitle">
                    <span> {work.subtitle} </span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WorksDisplay;

