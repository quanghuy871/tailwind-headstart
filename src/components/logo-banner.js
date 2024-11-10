import React, { useEffect } from "react";
import { OpenEyes, WordMark, CloseEyes } from "./icons";
import { gsap } from "gsap";

const LogoBanner = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const logoAnimation = gsap.timeline({ repeat: -1, repeatDelay: 5 });

      logoAnimation
        .to('.logo--close', {
          visibility: 'visible',
          opacity: 1,
          duration: 0.2,
          ease: 'power1.inOut',
        })
        .to('.logo--close', {
          visibility: 'hidden',
          opacity: 0,
          duration: 0.2,
          ease: 'power1.inOut'
        });

      const scrollTimeout = setTimeout(() => {
        const patternCta = document.querySelector('.pattern-cta');
        if (patternCta) {
          patternCta.scrollIntoView({ behavior: 'smooth' });
        }
      }, 6000);

      const handleScroll = () => {
        clearTimeout(scrollTimeout); // Clear timeout if user scrolls
        window.removeEventListener('scroll', handleScroll); // Remove event listener after scroll
      };

      window.addEventListener('scroll', handleScroll);
      

      return () => {
        clearTimeout(scrollTimeout); // Clean up timeout on component unmount
        window.removeEventListener('scroll', handleScroll); // Clean up event listener
      };
    }
  }, []);

  return (
    <section className='logo-banner'>
      <div className='logo-banner__inner'>
        <div className="logo-banner__wrapper">
          <div className="logo">
            <div className="logo--word">
              <WordMark />
            </div>
            <div className="logo--open">
              <OpenEyes />
            </div>
            <div className="logo--close">
              <CloseEyes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
