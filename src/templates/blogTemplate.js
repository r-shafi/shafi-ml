import React from 'react';
import { graphql } from 'gatsby';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Base from '../components/base';
import Head from '../components/head';

import '../style/blogpost.css';

deckDeckGoHighlightElement();

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Base>
      <Head title={frontmatter.title} description={frontmatter.info} />
      <div className="post-body">
        <h1>{frontmatter.title}</h1>
        <span className="date">
          {frontmatter.date}
        </span>
        <p className="author">
          Shafi Rayhan
        </p>
        <div
          className="post-content"
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
