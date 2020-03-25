import React from 'react';
import { Link } from 'react-router-dom';
import HoverImage from './hoverImageComponent/hoverImage';

const HomeSection = (props) => {
    return (
        <div className={"home-section " + props.name} name={props.name}>
            <div className="img-container">
                <div className="desc-container">
                    <div className="description"> 
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="desc-overlay" id={props.name+"-description"} />
                { props.link
                        ? <Link to={"/details/"+props.name}><HoverImage id={props.name+"-image1"} name="image1" image={props.image1}/></Link>
                        : <HoverImage id={props.name+"-image1"} name="image1" image={props.image1}/>
                }
                { props.link
                        ? <Link to={"/details/"+props.name}><HoverImage id={props.name+"-image2"} name="image2" image={props.image2}/></Link>
                        : <HoverImage id={props.name+"-image2"} name="image2" image={props.image2}/>
                }
            </div>
        </div>
    );
}

export default HomeSection;
