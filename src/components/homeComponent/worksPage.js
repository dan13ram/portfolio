import React from 'react';

import WorksDisplay from './worksDisplay';
import WorksList from './worksList';


class WorksPage extends React.Component {
    render () {
        return (
            <div className="works-page">
                <WorksList />
                <WorksDisplay />
            </div>
        );
    }
}

export default WorksPage;
