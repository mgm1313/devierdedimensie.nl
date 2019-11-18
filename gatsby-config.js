module.exports = {
  siteMetadata: {
    title: `Recap 24e Lustrum der KSV Sanctus Virgilius - De Vierde Dimensie`,
    description: `Herbeleef het 24e Lustrum der Katholieke Studentenvereniging Sanctus Virgilius, met het thema De Vierde Dimensie!`,
    author: `@techmaus`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Recap Lustrum Vierde Dimensie`,
        short_name: `Recap XXIV`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
