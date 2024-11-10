import React from 'react'
import LogoBanner from "../components/logo-banner";
import PatternCta from "../components/pattern-cta";
import ImageCarousel from "../components/image-carousel";
import TitleContentImage from "../components/title-content-image";
import ShopLinks from "../components/shop-links";
import Image from "../components/image";
import SubscribeCta from "../components/subscribe-cta";
import ImageCta from "../components/image-cta";
import Menu from "../components/menu";
import Events from "../components/events";
import Contact from "../components/contact";
import BasicPage from "../components/basic-page";
import Faqs from "../components/faqs";

const renderBlock = (param, el, i, slug) => {
  el.key = i

  let block = {
    'LogoBanner': (el) => <LogoBanner { ...el } slug={slug} />,
    'PatternCta': (el) => <PatternCta { ...el } slug={slug} />,
    'ImageCarousel': (el) => <ImageCarousel { ...el } slug={slug} />,
    'TitleContentImage': (el) => <TitleContentImage { ...el } slug={slug} />,
    'ShopLinks': (el) => <ShopLinks { ...el } slug={slug} />,
    'Image': (el) => <Image { ...el } slug={slug} />,
    'SubscribeCta': (el) => <SubscribeCta { ...el } slug={slug} />,
    'ImageCta': (el) => <ImageCta { ...el } slug={slug} />,
    'Menu': (el) => <Menu { ...el } slug={slug} />,
    'Events': (el) => <Events { ...el } slug={slug} />,
    'Contact': (el) => <Contact { ...el } slug={slug} />,
    'BasicPage': (el) => <BasicPage { ...el } slug={slug} />,
    'Faqs': (el) => <Faqs { ...el } slug={slug} />,
  }[param]

  if (!block) return null

  return block(el)
}

export default renderBlock