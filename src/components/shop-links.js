import React from "react";
import parse from 'react-html-parser'
import Link from "../utils/link";
import {GatsbyImage} from "gatsby-plugin-image";

const ShopLinks = ({products, button}) => {

    return (
        <section className='shop-links'>
            <div className='shop-links__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                <div className='shop-links__button'>
                    {button?.url && <Link className='btn btn--scarlet' to={button?.url}>{button.title}</Link>}
                </div>

                <div className='shop-links__items'>
                    {
                        products?.length &&
                        products?.map((el, i) => (
                            <div className='shop-links__item' key={i}>
                                {el?.image.localFile &&
                                    <GatsbyImage image={el.image.localFile.childImageSharp.gatsbyImageData}
                                                 alt='Cheri'/>}
                                {el.title && <h3>{parse(el.title)}</h3>}
                                {el.price && <h4>{parse(el.price)}</h4>}
                                {el.description && <p>{parse(el.description)}</p>}
                                {el.link?.url &&
                                    <Link className='btn btn--border' to={el.link.url}>{el.link.title}</Link>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ShopLinks;