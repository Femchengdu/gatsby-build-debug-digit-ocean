module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Ledger Live Media",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://04e6-176-186-199-243.ngrok.io/graphql", //"https://wp.aws.sbx.ldg-tech.com/graphql", //`${process.env.GATSBY_API_URL}/graphql`,
        develop: {
          // options related to `gatsby develop`
          hardCacheMediaFiles: true,
        },
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
  ],
};
