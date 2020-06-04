import React from 'react';

//images
import photo from '../../../assets/img/photo.webp';

class AboutPage extends React.Component {
    
    constructor (props) {
        super(props);
        this.aboutPage = React.createRef();
    }

    componentDidMount() {
        this.aboutPage.current && this.aboutPage.current.scrollIntoView();
    }

    render () {
        return (
            <div className="about-page-container" ref={this.aboutPage}> 
                <div className="about-page" >
                    <div id="about-photo">
                        <div id="about-img-cropper" >
                            {/* <img src={photo} id="about-img" alt="profile" /> */}
                        </div>
                    </div>
                    <div id="about-content">
                    </div>
                </div>
                 
            </div>
        );
    }
}

export default AboutPage;
