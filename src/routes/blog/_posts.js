"use strict";



//  N A T I V E

import path from "path";
import fs from "fs";

//  I M P O R T S

import marked from "marked";
import { orderBy } from "natural-orderby";

//  U T I L

import { processMarkdown } from "~util";



//  E X P O R T S

export function getPosts() {
  const slugs = fs.readdirSync("posts")
    .filter(file => path.extname(file) === ".md")
    .map(file => file.slice(0, -3));

  const sortedPosts = orderBy(
    slugs.map(getPost),
    [v => v.metadata.date],
    ["desc"]
  );

  return sortedPosts;
}

export function getPost(slug) {
  const file = `posts/${slug}.md`;
  const regexForRemoteLinks = /(https?:\/\/.*?)(\S+)|\((https?:\/\/.*?)\)/g;

  if (!fs.existsSync(file))
    return null;

  const markdown = fs.readFileSync(file, "utf-8");
  const { content, metadata, raw } = processMarkdown(markdown);
  const html = marked(content);
  const linkMatches = html.match(regexForRemoteLinks);
  let updatedHtml = html;

  if (linkMatches) {
    linkMatches.map(link => {
      const linkMatch = link.split("\">");
      const linkReplacement = `${linkMatch[0]}" rel="noopener noreferrer" target="_blank">${linkMatch[1]}`;

      updatedHtml = updatedHtml.replace(link, linkReplacement);
    });
  }

  return {
    html: updatedHtml,
    metadata,
    raw,
    slug
  };
}
