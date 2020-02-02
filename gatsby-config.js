module.exports = {
  siteMetadata: {
    title: `ponmuthuselvam's portfolio`,
    description: `Web developer | Engineer who crafts applications with love 💖`,
    author: `@ponmuthuselvam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ponmuthuselvam's portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`, `900`]
          },
          {
            family:  `Bangers`
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "GCMS",
        // The field you'll query against, can also be anything you want.
        fieldName: "gcms",
        // Your API endpoint, available from the dashboard and settings window.
        // You can use this endpoint that features US mountains for now.
        url:"https://api-euwest.graphcms.com/v1/ck5264v3wnzr101do8ngeahgj/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
