import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";

const Image = ({image}) => {

    return (
        <section className='image'>
            <div className='image__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                {image?.localFile && <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt='RSG'/>}
            </div>
        </section>
    )
}

export default Image;