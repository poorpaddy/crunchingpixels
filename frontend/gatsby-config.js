module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: ".",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9ai8irac",
        dataset: "production",
      },
    },
  ],
};
