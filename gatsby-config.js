module.exports = {
  siteMetadata: {
    title: `Evidence Strong`,
    author: {
      name: `Alex Mącznik`,
      summary: `Written by Alex Mącznik PhD who is a sports medicine researcher.`,
    },
    description: `Evidence Strong is bringing you evidence-based knowledge on injury prevention and performance enhancement in sport. Slightly strength-biased.`,
    siteUrl: `https://evidencestrong.com/`,
    social: {
      twitter: `alex_macznik`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `XXX`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evidence Strong`,
        short_name: `Evidence Strong`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cd2653`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `drafts`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
