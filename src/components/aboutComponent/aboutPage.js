import React from 'react';

//images
import photo from '../../assets/img/photo.jpg';

class AboutPage extends React.Component {
    render () {
        return (
            <div className="about-page-container"> 
                <div className="about-page" >
                    <div id="about-photo">
                        <div id="about-img-cropper" >
                            <img src={photo} id="about-img" alt="photo" />
                        </div>
                    </div>
                    <div id="about-content">
                        <p> Hello!! </p>
                        <p> I'm Varsha</p>
                        <p> I'm the cutest of the cutes</p>
                        <p> I enjoy drawing </p>
                        <p> I enjoy dancing </p>
                        <p> I enjoy tea </p>
                        <p> I also make dumb noises and tell people that random birds made them </p>
                        <p> You can contact me at the below email </p>
                        <p> varsha94[dot]n [at] gmail [dot] com</p>
                    </div>
                </div>
                 
            </div>
        );
    }
}

export default AboutPage;
