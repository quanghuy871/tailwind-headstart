import React from "react";
import parse from "react-html-parser";

const BasicPage = ({title, content}) => {

    return (
        <section className='basic-page'>
            <div className='basic-page__inner'>
                <div className='basic-page__title'>{title && <h1>{parse(title)}</h1>}</div>
                <div className='basic-page__content'>{content && parse(content)}</div>
            </div>
        </section>
    )
}

export default BasicPage;