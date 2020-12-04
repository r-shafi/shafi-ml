module.exports = {
  siteMetadata: {
    title: 'Shafi Rayhan',
    author: 'Shafi Rayhan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog-posts`,
        name: 'blog-posts',
      },
    },
    'gatsby-transformer-remark',
  ],
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
};
