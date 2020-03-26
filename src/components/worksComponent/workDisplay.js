import React from 'react';
import { useHistory } from "react-router-dom";

class WorkDisplay extends React.Component {A
    constructor (props) {
        super(props);
        this.backgroundStyle = {
            backgroundImage:`url(${this.props.cover})` 
        };
    }

    render () {
        return (
            <div className="work-display-container"> 
                <div className="work-display" style={this.backgroundStyle}> 
                    <WorkView {...this.props}/>
                </div>
            </div>
        );
    }
}

function WorkView(props) {

    const history = useHistory();

    function displayPage() {
        history.push("/display/"+props.value);
    }

    return  (
        <div className="work-container" onClick={displayPage}>
            <div className="work-title">
                <span> {props.title} </span>
            </div>
            <div className="work-discription">
                <span> -- "{props.title}" -- </span>
            </div>
        </div>
    );
}

export default WorkDisplay;

