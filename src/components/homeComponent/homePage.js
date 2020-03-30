import React from 'react';
import { withLastLocation } from 'react-router-last-location';

import WelcomeSlide from './welcomeSlide';
import WorksPage from './worksPage';


class HomePage extends React.Component {
    render () {

        let lastLocation = this.props.lastLocation;
        let isFirstLoad = lastLocation == null;

        if (isFirstLoad) {
            return (
                <div className="home-page-container"> 
                    <WelcomeSlide />
                    <div className="home-page"> 
                        <WorksPage />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="home-page"> 
                    <WorksPage />
                </div>
            );
        }
    }
}

export default withLastLocation(HomePage);



