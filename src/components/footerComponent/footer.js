import React from 'react';


const Footer = (props) => {

    function backToTop() {
        props.content.current && props.content.current.scrollIntoView({behavior:"smooth"});
    }

    return (
        <div className="footer-container">
            <div className="footer">
                <span id="top-button" onClick={backToTop}> &#x25B2; </span>
            </div>
        </div>
    );
}

export default Footer;
