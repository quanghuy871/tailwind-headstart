import React from "react";
import parse from "react-html-parser";
import Link from "../utils/link";
import {GatsbyImage} from "gatsby-plugin-image";
import Pattern from "../assets/images/cheri-pattern.svg";

const Events = ({title, events}) => {


    return (
        <section className='events'>
            <div className='events__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                <div className='events__button'>
                    {title && <Link className='btn btn--scarlet' to='/'>{parse(title)}</Link>}
                </div>

                <div className='events__items'>
                    {
                        events?.length &&
                        events?.map((el, i) => (
                            <div className='events__item' key={i}>
                                {el?.featuredImage.node.localFile && <GatsbyImage image={el.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                                                 alt='Cheri'/>}
                                {el.title && <h3>{parse(el.title)}</h3>}
                                {el.acf?.date && <h4>{parse(el.acf?.date)}</h4>}
                                {el.excerpt && <p>{parse(el.excerpt)}</p>}
                                {el.acf?.button && <Link className='btn btn--border' to={el.acf?.button.url}>{el.acf?.button.title}</Link>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Events;