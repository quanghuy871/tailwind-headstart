import React, { useEffect, useState } from "react";
import parse from "react-html-parser";

const Menu = ({ title, content, section, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSections, setActiveSections] = useState([]);

  useEffect(() => {
    // Calculate the active sections based on the selected tab's index and section counts
    let startIndex = 0;

    for (let i = 0; i < activeTab; i++) {
      startIndex += tabs[i].sections; // Sum up sections of all previous tabs
    }

    // Get the sections for the current active tab
    const endIndex = startIndex + tabs[activeTab].sections;
    setActiveSections(section.slice(startIndex, endIndex));
  }, [activeTab, section, tabs]);

  return (
    <section className='menu'>
      <div className='menu__inner'>
        <div className='menu__title'>
          {title && <h2>{parse(title)}</h2>}
          {content && parse(content)}
        </div>

        <div className='menu__items'>
          {tabs?.length > 0 && (
            <div className='menu__tabs'>
              {tabs.map((el, i) => (
                <button
                  key={i}
                  className={`menu__tab ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {el.title === 'Bakery & Patisserie' ? <><span className='mobile'>Bakery</span><span className='desktop'>{el.title}</span></> : el.title}
                </button>
              ))}
            </div>
          )}
          {activeSections.length > 0 &&
            activeSections.map((el, i) => (
              <div key={i} className='menu__item'>
                {el.title && <h3>{parse(el.title)}</h3>}

                <ul className='menu__item--list'>
                  {el.items?.length > 0 &&
                    el.items.map((item, j) => (
                      <li key={j}>
                        {item.title && (
                          <div className='title'>
                            <div className='title__wrapper'>
                              <span>{parse(item.title)}</span>
                              {item?.dietary?.length > 0 && (
                                <ul>
                                  {item.dietary.map((diet, k) => (
                                    <li key={k}>{diet}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        )}
                        {item.price && (
                          <div className='price'>
                            <div className='price__wrapper'>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        )}
                        <p>{item?.subtitle}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

        <div className='menu__notes'>
          <ul>
            <li><span>GF</span> Gluten Free</li>
            <li><span>DF</span> Dairy Free</li>
            <li><span>VG</span> Vegetarian</li>
            <li><span>V</span> Vegan</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
