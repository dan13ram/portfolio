import React from 'react';
import Social from '../../socialComponent/socialPlus.js';

const LandingPageFooter = () => {
    const open = () => {
        document.querySelector(".follow").classList.add('open');
    }
    const close = () => {
        document.querySelector(".follow").classList.remove('open');
    }
    return (
        <div className="landing-page-footer">
            <div className="scroll">
                <div className="scroll-inner">
                    <div className="scroll-text text">SCROLL</div>
                    <div className="scroll-arrow icon">{">>"}</div>
                </div>
            </div>
            <div className="follow" onMouseEnter={open} onMouseLeave={close}>
                <div className="follow-front">
                    <div className="follow-text text">FOLLOW</div>
                    <div className="follow-plus icon">++</div>
                </div>
                <div className="follow-back">
                    <Social/>
                </div>
            </div>
        </div>
    );
}

export default LandingPageFooter;
