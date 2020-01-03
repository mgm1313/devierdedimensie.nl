require(`dotenv`).config({
  path: `.env.build`
});

module.exports = {
  siteMetadata: {
    title: `De Vierde Dimensie - 24e Lustrum der KSV Sanctus Virgilius`,
    short_name: `XXIV memories`,
    description: `Herbeleef De Vierde Dimensie, hét thema van het 24e Lustrum der Katholieke Studentenvereniging Sanctus Virgilius. Hier vind je alle media: foto's, video's en muziek van het lustrum!`,
    author: `@techmaus`
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-51532513-6`,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `XXIV Memories`,
        short_name: `XXIV Memory`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/assets/4d-logo.png`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/gallery_s-markdown`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
        whitelist: [
          `fslightbox-toolbar-button`,
          `fslightbox-thumb`,
          `fslightbox-slide-number-container`,
          `aspect-ratio-16_9`,
          `aspect-ratio-21_9`
        ],
        whitelistPatterns: [
          /black$/,
          /gala$/,
          /wispo$/,
          /lustrumweek$/,
          /theater$/,
          /piekweek$/,
          /^ril/,
          /^shape/
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-firebase`,
      options: {
        credential: {
          type: process.env.TYPE,
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/\\n/g, `\n`),
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          auth_uri: process.env.AUTH_URI,
          token_uri: process.env.TOKEN_URI,
          auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
        },

        // your firebase database root url
        databaseURL: `https://recap-vierdedimensie.firebaseio.com`,

        // you can have multiple "types" that point to different paths
        types: [
          {
            // this type will become `allWorkshop` in graphql
            type: `images`,

            // the path to get the records from
            path: `images`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `bnu0cor`
        }
      }
    }
  ]
};
