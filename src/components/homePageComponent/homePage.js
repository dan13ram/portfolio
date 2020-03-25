import React from 'react';

//import ScrollMagic from '../../vendor/scrollmagic';
//import '../../vendor/DrawSVGPlugin';
//import { TimelineMax, Power2, Sine, Expo } from 'gsap/all';

//import HomeContent from './homeContentComponent/homeContent';
//import LandingPage from './landingPageComponent/landingPage';
//import LandingPageFooter from './landingPageFooterComponent/landingPageFooter';

class HomePage extends React.Component{
    //    constructor(props) {
    //        super(props);
    //        this.controller = new ScrollMagic.Controller();
    //        this.enableScroll = this.enableScroll.bind(this);
    //    }
    //
    //    enableScroll() {
    //        console.log("animation done");
    //        setTimeout(2000, function() {
    //            console.log("opacity 1");
    //        const logos = document.querySelectorAll(".st1");
    //        for(let i = 0; i < logos.length - 1; ++i ) {
    //            logos[i].style.opacity = 1;
    //        }
    //        });
    //    }
    //
    //    componentDidMount() {
    //        var lineTween = new TimelineMax() 
    //        lineTween
    //            .fromTo(".st0", 3, {opacity: 1, strokeDashoffset: 790}, {opacity: 1, strokeDashoffset: 0, ease: Sine.easeInOut, delay: 0.5}, 0)
    //            .fromTo(".st1", 1.5, {opacity: 0}, {opacity: 1, ease: Sine.easeOut, delay: 3}, 0);
    //
    //        // tween for logo fade away animation on scroll
    //        var introTween = new TimelineMax();
    //        introTween
    //            .to(".st0", 1, {opacity: 0, ease: Expo.easeInOut})
    //            .to(".st1", 1, {opacity: 0, ease: Expo.easeInOut}, 0);
    //        new ScrollMagic.Scene({
    //            triggerElement: ".home-content",
    //            triggerHook: 0.999,
    //            duration: '75%'
    //        })
    //            .setTween(introTween)
    //            .addTo(this.controller);
    //
    //        var altlogoAnim = new TimelineMax();
    //        altlogoAnim
    //            .fromTo(".header", 1, {backgroundColor: "transparent"}, {backgroundColor: "#fafafa"})
    //            .fromTo(".logo", 1, {visibility: "hidden", opacity: 0, letterSpacing: "0em"}, {visibility: "visible", opacity: 1, letterSpacing: ".7em"}, 0);
    //        new ScrollMagic.Scene({
    //            triggerElement: ".home-content",
    //            triggerHook: 0.4,
    //            duration: '40%'
    //        })
    //            .setTween(altlogoAnim)
    //            .addTo(this.controller);
    //
    //        var footerAnim = new TimelineMax();
    //        footerAnim
    //            .fromTo(".landing-page-footer", 1, {zIndex: 1}, {zIndex: 0})
    //        new ScrollMagic.Scene({
    //            triggerElement: ".home-content",
    //            triggerHook: 1,
    //            duration: '0.0001%'
    //        })
    //            .setTween(footerAnim)
    //            .addTo(this.controller);
    //    }
    //
    //    componentWillUnmount() {
    //        this.controller.destroy();
    //        document.querySelector(".header").style.background = "#fafafa";
    //        let logo = document.querySelector(".logo");
    //        logo.style.visibility = "visible";
    //        logo.style.opacity = 1;
    //        logo.style.letterSpacing = ".7em";
    //    }

    render() {
        return (
            <div className="home-page">
                {/*
                <LandingPage/>
                <LandingPageFooter/>
                <HomeContent {...this.props}/>
                */}
            </div>
        );
    }
}

export default HomePage;
