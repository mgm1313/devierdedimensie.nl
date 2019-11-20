require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `XXIV memories - 24e Lustrum der KSV Sanctus Virgilius`,
    short_name: `XXIV memories`,
    description: `Herbeleef het 24e Lustrum der Katholieke Studentenvereniging Sanctus Virgilius, met het thema De Vierde Dimensie!`,
    author: `@techmaus`
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
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
          /^ril/
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        credential: require(`./firebase-key.json`),

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
