"use strict";



//  I M P O R T

import { getPosts } from "./_posts.js";



//  E X P O R T

export function get(req, res) {
  let contents;

  if (!contents || process.env.NODE_ENV !== "production") {
    const posts = getPosts().map(post => ({
      author: {
        name: post.metadata.author,
        url: post.metadata.profile
      },
      date: post.metadata.date,
      image: post.metadata.image,
      slug: post.slug,
      title: post.metadata.title
    }));

    contents = JSON.stringify(posts);
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
