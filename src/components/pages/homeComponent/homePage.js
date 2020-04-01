import React from 'react';
import { withLastLocation } from 'react-router-last-location';

import WelcomeSlide from './welcomeComponent/welcomeSlide';
import WorksPage from './worksComponent/worksPage';


class HomePage extends React.Component {
    
    constructor (props) {
        super(props);
        this.homePage = React.createRef();
    }

    componentDidMount() {
        this.homePage.current && this.homePage.current.scrollIntoView();
    }

    render () {

        let lastLocation = this.props.lastLocation;
        let isFirstLoad = lastLocation == null;

        if (isFirstLoad) {
            return (
                <div className="home-page-container"> 
                    <WelcomeSlide />
                    <div className="home-page" ref={this.homePage}> 
                        <WorksPage />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="home-page" ref={this.homePage}> 
                    <WorksPage />
                </div>
            );
        }
    }
}

export default withLastLocation(HomePage);



