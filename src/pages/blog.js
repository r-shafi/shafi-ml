import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/postlink';

import Base from '../components/base';
import Head from '../components/head';

import '../style/blog.css';

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Base>
      <Head title="Blog" />
      <div className="posts-grid">{Posts}</div>
    </Base>
  );
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
    edges {
      node {
        id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            info
        }
      }
    }
  }
}
`;
