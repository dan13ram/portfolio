import React from 'react';

import WelcomePage from './welcomePage';
import WorkDisplay from './workDisplay';

//images
import sixelements from '../../assets/img/sixelements.png';
import trance from '../../assets/img/trance.png';
import foliage from '../../assets/img/foliage/wall.jpg';

class WorksPage extends React.Component {
    constructor (props) {
        super(props);
        this.contentRef = React.createRef();
    }
    render () {
        return (
            <div className="works-page"> 
                <WelcomePage content={this.contentRef}/>
                <div className="works-content" ref={this.contentRef}>
                    <WorkDisplay title="six elements" cover={sixelements} value="sixelements"/>
                    <WorkDisplay title="foliage collage project" cover={foliage} value="foliage"/>
                    <WorkDisplay title="trance" cover={trance} value="trance"/>
                </div>
            </div>
        );
    }
}

export default WorksPage;
