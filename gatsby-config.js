require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cheri Eatery`,
    description: `An all day eatery offering a little something sweet and a little something savoury.`,
    author: `@atollon`,
    siteUrl: `https://${process.env.SITE_URL}/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-image",
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false,
        defaultQuality: 100,
        defaults: {
          formats: [`auto`],
          placeholder: `dominantColor`,
          breakpoints: [900],
          quality: 100,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `site long name`,
        short_name: `site shortname`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://${process.env.WP_URL}/graphql`,
        auth: {
          htaccess: {
            username: "demo",
            password: "password",
          }
        },
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
          perPage: 10,
        },
        develop: {
          nodeUpdateInterval: 300 * 1000,
          hardCacheMediaFiles: true,
          //hardCacheData: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
        rootMargin: '0px 0px 0px 0px', // Corresponds to root's bounding box margin
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://cherieatery.com.au`,
        sitemap: `https://cherieatery.com.au/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N6FWZBNG",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ]
};