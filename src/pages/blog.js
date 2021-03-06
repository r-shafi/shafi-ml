import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import style from '../styles/blog.module.css';

function Post({ post }) {
  return (
    <Link to={post.frontmatter.slug} className={style.post}>
      <h1>{post.frontmatter.title}</h1>
      <p className={style.date}>{post.frontmatter.date}</p>
      <p className={style.info}>{post.frontmatter.info}</p>
    </Link>
  );
}

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <Post key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Head title="Blog" description="Blog by Shafi Rayhan. I talk about JavaScript, CSS, React and other web stuffs!" />
      <div className={style.blogContainer}>{Posts}</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
