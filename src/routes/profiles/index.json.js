"use strict";



//  I M P O R T

import { getProfiles } from "./_profiles.js";



//  E X P O R T

export function get(req, res) {
  let contents;

  if (!contents || process.env.NODE_ENV !== "production") {
    const profiles = getProfiles().map(profile => ({
      aliases: profile.metadata.aliases,
      blurb: profile.metadata.blurb,
      name: profile.metadata.name,
      // image: profile.metadata.image,
      slug: profile.slug
    }));

    contents = JSON.stringify(profiles);
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
