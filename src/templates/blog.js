import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import style from '../styles/post.module.css';
import '../styles/pre.css';

export default function BlogPost({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Head title={frontmatter.title} description={frontmatter.info} keywords={frontmatter.tags} />
      <div className={style.postContainer}>
        <h1>{frontmatter.title}</h1>
        <p className={style.date}>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        info
        tags
      }
    }
  }
`;
