import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { data } from '../../constants';

//images
import {ReactComponent as Instagram} from '../../assets/svg/instagram.svg';
import {ReactComponent as Vimeo} from '../../assets/svg/vimeo.svg';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';

class NavBar extends React.Component {

    constructor (props) {
        super(props);
        this.navBar = React.createRef();
        this.logoText = React.createRef();
        this.workItems = React.createRef();
        this.state = {
            open: false
        }
    }

    toggleOpen = (event) => {

        this.navBar.current.classList.toggle("open");
        this.workItems.current.classList.toggle("closed");
        this.logoText.current.classList.toggle("closed");
    }

    render () {
        return (
            <div className="nav-bar" ref={this.navBar}> 
                <div className="logo-container" >
                    <Link to="/">
                        <Logo id="logo-img"/>
                    </Link>
                    <Link to="/" className="logo-txt closed" ref={this.logoText}>
                        littlehoodedcreature
                    </Link>
                </div>
                <div className="nav-links-container"> 
                    <div className="work-link">
                        <NavLink activeClassName="active" exact to="/">
                            work
                        </NavLink>
                        <div className="nav-toggle" onClick={this.toggleOpen}>
                            &#x25BE;
                        </div>
                    </div>
                    <div className="work-items closed" ref={this.workItems}>
                        {
                            Object.keys(data).map((item, i) => (
                                <WorkItem key={i.toString()} value={item} toggleOpen={this.toggleOpen}/>
                            ))
                        }
                    </div>
                    <NavLink activeClassName="active" exact to="/about" className="about-link">
                        about
                    </NavLink>
                </div>

                <FollowLinks />
            </div>
        );
    }
}

function WorkItem(props) {

    let work = data[props.value];

    return  (
        <div className="workitem" onClick={props.toggleOpen}>
            <Link to={"/project/"+work.url}> 
                <p className="workitem-title"> {work.title} </p>
                <p className="workitem-desc"> {work.subtitle} ({work.year}) </p>
            </Link>
        </div>
    );
}

function FollowLinks(props) {

    return (
        <div className="follow-links">
            <a href="https://instagram.com/littlehoodedcreature" id="instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="follow-img" id="instagram-img" />
            </a>
            <a href="https://vimeo.com/littlehoodedcreature" id="vimeo" target="_blank" rel="noopener noreferrer">
                <Vimeo className="follow-img" id="vimeo-img" />
            </a>
        </div>
    );
}

export default NavBar;

