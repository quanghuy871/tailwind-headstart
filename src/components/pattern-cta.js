import React from "react";
import parse from 'react-html-parser'
import Link from "../utils/link";
import Pattern from '../assets/images/cheri-pattern.svg'

const PatternCta = ({title, content, buttons}) => {

  return (
    <section className='pattern-cta' data-sal="fade" data-sal-duration="1000">
      <div className='pattern-cta__inner'>
        <div className='pattern-cta__content'>
          {title && <h2 className='mb-6 md:mb-10 md:mx-auto font-heading md:text-heading-h2 text-heading-h4 font-regular md:max-w-820'>{parse(title)}</h2>}
          {content && parse(content)}

          <div className='pattern-cta__buttons'>
            {buttons?.length > 0 && buttons.map((el, i) => (
              <Link className={`btn ${0 !== i ? 'btn--border' : 'btn--scarlet'}`} key={i} to={el.button.url}>{el.button.title}</Link>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatternCta;