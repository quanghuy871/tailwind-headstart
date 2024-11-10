import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'

import RenderBlock from '../utils/render-block'

class PageTemplate extends Component {

  render() {
    const { wpPage } = this.props.data

    return (
      <>
        <Seo bodyClass={`page-template page-template--${wpPage.slug}`} {...wpPage.seo} />
        { wpPage.acf?.components?.map((el, i) => RenderBlock(el.fieldGroupName?.replace('page_Acf_Components_', ''), el, i, wpPage.slug))  }
      </>
    )
  }
}

export const pageQuery = graphql`
query ($id: String!) {
  wpPage(id: {eq: $id}) {
    title
    slug
    uri
    seo {
      ...WpSeo
    }
    acf {
      components {
        ... on WpPage_Acf_Components_BasicPage {
            content
            fieldGroupName
            title
        }
        ... on WpPage_Acf_Components_Faqs {
            fieldGroupName
            title
            items {
              title
              content
            }
        }
       ... on WpPage_Acf_Components_Contact {
            address
            openingHours
            careers {
              url
              title
            }
            email {
              title
              url
            }
            fieldGroupName
            phone {
              title
              url
            }
          }
       ... on WpPage_Acf_Components_Events {
            fieldGroupName
            title
            events {
              ... on WpPost {
                id
                excerpt
                title
                uri
                slug
                content
                link
                acf {
                  date
                  button {
                    title
                    url
                  }
                }
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1600)
                      }
                    }
                  }
                }
              }
            }
          }
        ... on WpPage_Acf_Components_Events {
            fieldGroupName
            title
        }
        ... on WpPage_Acf_Components_Menu {
            content
            fieldGroupName
            title
            section {
              title
              items {
                dietary
                price
                title
                subtitle
              }
            }
            tabs {
              title
              sections
            }
          }
       ... on WpPage_Acf_Components_ImageCta {
          content
          fieldGroupName
          title
          buttons {
            button {
              title
              url
            }
          }
          image {
             localFile {
                childImageSharp {
                  gatsbyImageData(width: 1600)
                }
              }
          }
      }
       ... on WpPage_Acf_Components_SubscribeCta {
          content
          fieldGroupName
          title
        }
       ... on WpPage_Acf_Components_Image {
          fieldGroupName
          image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1600)
                }
              }
            }
        }
       ... on WpPage_Acf_Components_ShopLinks {
          fieldGroupName
          button {
            title
            url
          }
          products {
            title
            price
            description
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1600)
                }
              }
            }
            link {
              title
              url
            }
          }
        }
        ... on WpPage_Acf_Components_TitleContentImage {
          content
          fieldGroupName
          title
          reverse
          pattern
          button {
            url
            title
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1600)
              }
            }
          }
        }
      ... on WpPage_Acf_Components_ImageCarousel {
          fieldGroupName
          title
          gallery {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1600)
              }
            }
          }
        }
      ... on WpPage_Acf_Components_PatternCta {
          content
          fieldGroupName
          title
          buttons {
            button {
              title
              url
            }
          }
        }
        ... on WpPage_Acf_Components_LogoBanner {
          fieldGroupName
          title
        }
      }
    }
  }
}
`

export default PageTemplate