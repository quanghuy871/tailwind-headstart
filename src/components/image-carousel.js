import React from "react";
import Slider from "react-slick";
import parse from "react-html-parser";
import {GatsbyImage} from "gatsby-plugin-image";


const ImageCarousel = ({gallery, title}) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }],
    };

    return (
        <section className='image-carousel'>
            <div className='image-carousel__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                <div className='image-carousel__title'>
                    {title && <h2>{parse(title)}</h2>}
                </div>
                <div className='image-carousel__slider'>
                    {
                        gallery?.length > 0 &&
                        <Slider {...settings}>
                            {
                                gallery.map((el, i) => (
                                    <div key={i} className='image-carousel__item'>
                                        {el?.localFile &&
                                            <GatsbyImage image={el.localFile.childImageSharp.gatsbyImageData}
                                                         alt='Cheri'/>}
                                    </div>
                                ))
                            }
                        </Slider>
                    }
                </div>
            </div>
        </section>
    )
}

export default ImageCarousel;