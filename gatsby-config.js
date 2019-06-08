module.exports = {
  siteMetadata: {
    title: `RustyNerds`,
    description: `RustyNerds is a gaming community with bespoke custom Rust gaming servers plus other games!`,
    author: `@bugsy1440p`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rustynerds-website`,
        short_name: `rustynerds-website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-32x32.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};
