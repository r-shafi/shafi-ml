import React from 'react';
import { graphql } from 'gatsby';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Base from '../components/base';
import Head from '../components/head';

import blogCSS from '../style/blogPost.module.css';

deckDeckGoHighlightElement();

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Base>
      <Head title={frontmatter.title} description={frontmatter.info} />
      <div className={blogCSS.postContainer}>
        <h1>{frontmatter.title}</h1>
        <p className={blogCSS.date}>
          {frontmatter.date}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Base>
  );

  //
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark (
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
      }
    }
  }
`;
