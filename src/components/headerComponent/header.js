import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

//images
import logo from '../../assets/img/logo.webp';

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header">
                <div id="logo-container" >
                    <Link to="/">
                        <img src={logo} id="logo-img" alt="logo" />
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
