import React from 'react';
import * as PIXI from "pixi.js";
import { Sprite, Stage, Container } from "react-pixi-fiber";
import { TimelineMax } from 'gsap/all';

import bump_image from '../../../../../Assets/imgs/bump.jpg';

class HoverImage extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.pixi = React.createRef();
        this.displacement_sprite = React.createRef();
        this.resize = this.resize.bind(this);
        this.displacement_texture = PIXI.Texture.from(bump_image);
        this.displacement_texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        this.t = new TimelineMax();
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            width: 0,
            height: 0,
            filter: null,
            x: 0,
            y: 0,
            isEnabled: true
        }

    }

    resize() {
        if(this._isMounted) {
            const newState = {
                width: this.pixi.current.offsetWidth,
                height: this.pixi.current.offsetHeight,
                x: 0,
                y: 0,
                isEnabled: window.innerWidth >= 800
            }
            if (this.state.filter === null) {
                const filter = new PIXI.filters.DisplacementFilter(this.displacement_sprite.current);
                filter.scale.set(0);
                newState.filter = filter;
            }
            this.setState(newState);
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.resize();
        window.addEventListener('resize', this.resize);
        this.requestId = window.requestAnimationFrame(this.tick);
    }

    componentDidUpdate() {
    }

    tick() {
        let newX = this.state.x + 0.5;
        let newY = this.state.y + 0.5;
        if(this._isMounted && this.state.isEnabled) {
            this.setState({x:newX, y:newY});
        }
        window.requestAnimationFrame(this.tick);
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('resize', this.resize);
        window.cancelAnimationFrame(this.requestId);
    }

    mouseEnter() {
        if (this.state.isEnabled) {
            this.t
                .clear()
                .to(this.state.filter.scale, 1, {x: 20, y: -20})
        }
    }
    mouseLeave() {
        if (this.state.isEnabled) {
            this.t
                .clear()
                .to(this.state.filter.scale, 1, {x: 0, y: 0});
        }
    }
    render() {
        return (
            <div id={this.props.id} className={"hover-image "+this.props.name} ref={this.pixi} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}> 
                <div className="image-layover"/>
                <Stage width={this.state.width} height={this.state.height}>
                    <Container filters={[this.state.filter]} >
                        <Sprite width={this.state.width} height={this.state.height} texture={PIXI.Texture.from(this.props.image)}/>
                    </Container>
                    <Sprite ref={this.displacement_sprite} width={this.state.width} height={this.state.height} texture={this.displacement_texture} x={this.state.x} y={this.state.y}/>
                </Stage>
            </div>
        );
    }
}

export default HoverImage;
