import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug} className="blogPost">
    <h1>{post.frontmatter.title}</h1>
    <p className="date">{post.frontmatter.date}</p>
    <p className="desc">{post.frontmatter.info}</p>
  </Link>
);

export default PostLink;
