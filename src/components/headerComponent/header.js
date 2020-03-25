import React from 'react';
import { withRouter } from 'react-router-dom';

//images
import logo from '../../Assets/img/logo.png';

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo" >
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </header>
    );
}

export default withRouter(Header);
