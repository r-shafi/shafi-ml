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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-vscode',
          options: {
            theme: 'Monokai',
          },
        }],
      },
    },
  ],
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
};
