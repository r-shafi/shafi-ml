module.exports = {
  siteMetadata: {
    title: 'Shafi Rayhan',
    author: 'Shafi Rayhan',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
      // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: 'png', // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === 'MOZJPEG',
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
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
        plugins: [
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              theme: 'blackboard',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
  ],
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
};
