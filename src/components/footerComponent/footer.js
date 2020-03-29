import React from 'react';

//images
//import twitter from '../../assets/img/twitter.webp';
import instagram from '../../assets/img/instagram.webp';
import vimeo from '../../assets/img/vimeo.webp';

const Footer = (props) => {
    return (
        <div className="footer">
            <div id="follow-me">
                <span> Follow me </span>
            </div>
            <div className="follow-links">
                {/*
                <a href="" id="twitter" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} className="follow-img" id="twitter-img" alt="twitter" />
                </a>
                */}
                <a href="https://instagram.com/littlehoodedcreature" id="instagram" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="follow-img" id="instagram-img" alt="instagram" />
                </a>
                <a href="https://vimeo.com/littlehoodedcreature" id="vimeo" target="_blank" rel="noopener noreferrer">
                    <img src={vimeo} className="follow-img" id="vimeo-img" alt="vimeo" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
