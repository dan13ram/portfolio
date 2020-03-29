import React from 'react';

import WelcomeSlide from './welcomeSlide';
import WorksPage from './worksPage';


class HomePage extends React.Component {
    render () {
        return (
            <div className="home-page"> 
                <WelcomeSlide />
                <WorksPage />
            </div>
        );
    }
}

export default HomePage;



