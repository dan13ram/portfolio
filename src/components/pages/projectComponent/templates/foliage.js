import React from 'react';
import ImageGallery from 'react-image-gallery';
import Image from './image';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.innerRef = React.createRef();

    }

    outsideClick = (event) => {
        if (this.innerRef.current && !this.innerRef.current.contains(event.target)) {
            this.props.click(event, this.props.images);
        }
    }

    render () {
        let items = this.props.images.map((item, i) => {
            return {
                original: item
            }
        });
        return (
            <div className="gallery-wrapper"> 
                <div className={this.props.open?"gallery":"gallery closed"} onClick={this.outsideClick}> 
                    <div className="gallery-inner" ref={this.innerRef}>
                        <ImageGallery showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={items} />
                    </div>
                </div>
            </div>
        );
    }
}


class Foliage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            images: props.content.landscape,
            open: false
        }
    }

    toggleGallery = (event, images) => {
        this.setState({
            open: !this.state.open,
            images: images
        })
    }

    render () {
        return (
            <div className="foliage-container"> 
                <Gallery open={this.state.open} images={this.state.images} click={this.toggleGallery}/>
                    <div className="foliage-left">
                        <Image url={this.props.content.landscape[0]} click={(event) => { this.toggleGallery(event, this.props.content.landscape)}} value={0}/>
                        <Image url={this.props.content.portrait[0]} click={(event) => { this.toggleGallery(event, this.props.content.portrait)}} value={1}/>
                    </div>
                <div className="foliage-right">
                    <Image url={this.props.content.square[0]} click={(event) => { this.toggleGallery(event, this.props.content.square)}}  value={2}/>
                </div>
            </div>
        );
    }
}

export default Foliage;
