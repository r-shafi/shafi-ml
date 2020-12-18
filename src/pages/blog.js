import React from 'react';
import { Link, graphql } from 'gatsby';

import Base from '../components/base';
import Head from '../components/head';

import blog from '../style/blog.module.css';

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug} className={blog.link}>
    <div className={blog.post}>
      <h1>{post.frontmatter.title}</h1>
      <p className={blog.date}>{post.frontmatter.date}</p>
      <p className={blog.description}>{post.frontmatter.info}</p>
    </div>
  </Link>
);

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
      <div className={blog.container}>{Posts}</div>
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
