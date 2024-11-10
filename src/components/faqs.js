import React from "react";
import parse from "react-html-parser";

const Faqs = ({title, items}) => {

  let itemsArray = []
  for (let i = 0; i < items.length; i++) {
    itemsArray.push(false)
  }

  const [expandedItems, setExpandedItems] = React.useState(itemsArray)

  const handleItemClick = (index) => {
    const newExpandedItems = [...expandedItems]
    // close all expandedItems before opening new one
    for (let i = 0; i < newExpandedItems.length; i++) {
      if (i !== index) newExpandedItems[i] = false
    }
    newExpandedItems[index] = !newExpandedItems[index]
    setExpandedItems(newExpandedItems)
  }

  return (
    <section className='faqs'>
      <div className='faqs__inner'>
        <div className='faqs__title'>{title && <h1>{parse(title)}</h1>}</div>
        <div className='faqs__content'>
          { items.map((item, i) => {
            return (
              <div className={`faqs__item${expandedItems[i] ? ' active' : ''}`} key={i}>
                <div className='faqs__item-title' onClick={() => handleItemClick(i)}>
                  { item.title && <h4>{parse(item.title)}</h4> }
                  <div className='faqs__toggle' />
                </div>
                <div className='faqs__item-content'>
                  { item.content && <div className='faqs__item-content-wrap'>{parse(item.content)}</div> }
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </section>
  )
}

export default Faqs;