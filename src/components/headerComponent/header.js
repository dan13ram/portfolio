import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

//images
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header">
                <div id="logo-container" >
                    <Link to="/">
                        <Logo id="logo-img" />
                    </Link>
                    <Link to="/">
                        <span id="logo-txt"> littlehoodedcreature </span>
                    </Link>
                </div>
                <div id="links-container" > 
                    <NavLink activeClassName="active" exact to="/" id="work-link">work</NavLink>
                    <NavLink activeClassName="active" to="/about" id="about-link">about</NavLink>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Header);
