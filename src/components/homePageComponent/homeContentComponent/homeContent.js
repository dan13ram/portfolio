import React from 'react';
import HomeSection from './homeSectionComponent/homeSection';
import ScrollWrapper from '../../scrollWrapper/scrollWrapper'

import image_1 from '../../../Assets/imgs/asset_1.jpg';
import image_2 from '../../../Assets/imgs/asset_2.jpg';
import image_3 from '../../../Assets/imgs/asset_3.jpg';
import image_4 from '../../../Assets/imgs/asset_4.jpg';
import image_5 from '../../../Assets/imgs/asset_5.jpg';
import image_6 from '../../../Assets/imgs/asset_6.jpg';
import image_7 from '../../../Assets/imgs/asset_7.jpg';
import image_8 from '../../../Assets/imgs/asset_8.jpg';

const HomeContent = () => {
    const nakaDesc = "Browse through the space and pick from our two cosy editions. Enjoy our no-fluff amenities. Easy on the pocket and easy on the eyes.";
    const breakfastDesc = "Relish a healthy meal before your 10 a.m. meeting. Or simply walk-into our brewery and pick from a range of cusines while you sip on a cold one.";
    const cinemaDesc = "Catch the latest blockbuster at the multiplex. Get a full-fledged mall experience at the Sapphire Centre with a wide range of food and shopping choices.";
    const easyDesc = "Litmus is very easy to reach. Trains/metro, taxis and rickshaws are all just a stone’s throw away. EPOXY coated basements to keep your vehicles dust-free.";
    return (
        <div className="home-content-wrapper">
        <div className="landing-page-overlay"/>
        <div className="home-content">
            <HomeSection image1={image_1} image2={image_2} name="medium" title="Naka" description={nakaDesc} link/>
            <HomeSection image1={image_3} image2={image_4} name="catalyst" title="Breakfast buffet + Fresh brews" description={breakfastDesc} link/>
            <HomeSection image1={image_5} image2={image_6} name="cinema" title="Cinema + Food court" description={cinemaDesc}/>
            <HomeSection image1={image_7} image2={image_8} name="easy" title="Easy access + High grade parking" description={easyDesc}/>
        </div>
        </div>
    );
}

export default ScrollWrapper(HomeContent);
