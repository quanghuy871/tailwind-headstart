import React from "react";
import parse from "react-html-parser";
import {GatsbyImage} from "gatsby-plugin-image";
import Link from "../utils/link";
import Pattern from  '../assets/images/cheri-pattern.svg'

const TitleContentImage = ({title, content, image, reverse, pattern, button}) => {

    return (
        <section className='title-content-image'>
            <div className='title-content-image__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                <div className={`title-content-image__wrapper ${reverse ? 'title-content-image__reverse' : ''}`}>
                    <div className='title-content-image__title'>
                        {title && <h2>{parse(title)}</h2>}
                        {content && parse(content)}
                        {button?.url && <Link className='btn btn--border' to={button.url}>{button.title}</Link>}
                    </div>

                    <div className='title-content-image__image'>
                        {image?.localFile &&
                            <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt='Cheri'/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleContentImage;