import React from 'react';


const Footer = (props) => {

    function backToTop() {
        props.content.current && props.content.current.scrollIntoView();
        console.log(props.content.current);
    }

    return (
        <div className="footer-container">
            <div className="footer">
                <span id="top-button" onClick={backToTop}> back to top </span>
            </div>
        </div>
    );
}

export default Footer;
