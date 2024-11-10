import React from "react";
import parse from "react-html-parser";
import Newsletter from "./newsletter";

const SubscribeCta = ({title, content}) => {

    return (
        <section className='subscribe-cta'>
            <div className='subscribe-cta__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
                <div className='subscribe-cta__content'>
                    {title && <h2>{parse(title)}</h2>}
                    {content && parse(content)}
                </div>

                <div className='subscribe-cta__form'>
                    <Newsletter/>
                </div>
            </div>
        </section>
    )
}

export default SubscribeCta;