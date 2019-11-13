"use strict";



//  I M P O R T

import { getPost } from "./_posts.js";

//  U T I L

const lookup = new Map();



//  E X P O R T

export function get(requestObject, responseObject) { // next
  // the `slug` parameter is available because this file is called [slug].json.js
  const { slug } = requestObject.params;

  if (process.env.NODE_ENV !== "production" || !lookup.has(slug)) {
    const post = getPost(slug);
    lookup.set(slug, JSON.stringify(post)); // eslint-disable-line padding-line-between-statements
  }

  const json = lookup.get(slug);

  if (json) {
    responseObject.writeHead(200, {
      "Content-Type": "application/json"
    });

    responseObject.end(json);
  } else {
    responseObject.writeHead(404, {
      "Content-Type": "application/json"
    });

    responseObject.end(JSON.stringify({
      message: "Not found"
    }));
  }
}
