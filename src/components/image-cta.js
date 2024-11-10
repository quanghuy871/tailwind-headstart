import React from "react";
import parse from "react-html-parser";
import Link from "../utils/link";
import {CheriShort} from "./icons";
import {GatsbyImage} from "gatsby-plugin-image";

const ImageCta = ({title, content, buttons, image}) => {
    return (<section className='image-cta'>
        <div className='image-cta__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
            <div className='image-cta__wrapper'>
                <div className='image-cta__asset'> {image?.localFile &&
                    <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt='Chheri'/>} </div>
                <div className='image-cta__content'><CheriShort/> {title &&
                    <h2>{parse(title)}</h2>} {content && parse(content)}
                    <div className='image-cta__buttons'> {buttons?.length > 0 && buttons.map((el, i) => (
                        <Link className={`btn ${0 !== i ? 'btn--border' : 'btn--scarlet'}`} key={i} to={el.button.url}>{el.button.title}</Link>))} </div>
                </div>
            </div>
        </div>
    </section>)
}
export default ImageCta;