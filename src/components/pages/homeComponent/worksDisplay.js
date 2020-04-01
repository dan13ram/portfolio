import React from 'react';
import { useHistory } from "react-router-dom";

//images
import sixelements from '../../../assets/img/sixelements.webp';
import trance from '../../../assets/img/trance.webp';
import foliage from '../../../assets/img/foliage/wall.webp';

class WorksDisplay extends React.Component {

    render () {
        return (
            <div className="work-display"> 
                <WorkView title="six elements" cover={sixelements} value="sixelements"/>
                <WorkView title="foliage collage project" cover={foliage} value="foliage"/>
                <WorkView title="trance" cover={trance} value="trance"/>
            </div>
        );
    }
}

function WorkView(props) {

    let backgroundStyle = {
        backgroundImage:`url(${props.cover})` 
    };
    const history = useHistory();

    function openPage() {
        history.push("/project/"+props.value);
    }

    return  (
        <div className="workview-container" style={backgroundStyle}> 
            <div className="workview" onClick={openPage}>
                <div className="workview-content">
                <div className="work-title">
                    <span> {props.title} </span>
                </div>
                <div className="work-discription">
                    <span> -- "{props.title}" -- </span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WorksDisplay;

