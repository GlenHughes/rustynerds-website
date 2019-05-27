module.exports = {
  siteMetadata: {
    title: `RustyNerds Community Website`,
    description: `RustyNerds is a gaming community with bespoke custom Rust gaming servers plus other games!`,
    author: `@bugsy1440p`
  },
  plugins: [
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
    }
  ]
};
