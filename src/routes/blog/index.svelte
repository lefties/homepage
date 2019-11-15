<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  import Marquee from "~component/Marquee.svelte";
  import { replaceDashesWithDots } from "~util";
  import { orderBy } from "natural-orderby";

  export let posts;

  const links = [
    {
      author: "BBC News",
      date: "2006-12-06",
      title: "Left-handers \"think\" more quickly",
      url: "http://news.bbc.co.uk/2/hi/6212972.stm"
    },
    {
      author: "BBC News",
      date: "2004-12-08",
      title: "Left-handers \"better in fights\"",
      url: "http://news.bbc.co.uk/2/hi/health/4073775.stm"
    },
    {
      author: "BBC News",
      date: "2005-02-07",
      title: "Left-handers have different view",
      url: "http://news.bbc.co.uk/2/hi/health/4242419.stm"
    },
    {
      author: "BBC News",
      date: "2004-07-21",
      title: "Preferred hand \"set in the womb\"",
      url: "http://news.bbc.co.uk/2/hi/health/3912943.stm"
    }
  ];

  const sortedLinks = orderBy(
    links,
    [v => v.date],
    ["desc"]
  );
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;
    max-width: 800px;
  }

  h2 {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  ul {
    font-size: 1rem;
    line-height: 1.55;

    li {
      &:first-of-type {
        font-weight: normal;
      }

      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }

    a {
      color: $inc-blue-5;
      display: block;
      text-decoration: underline;
      transition: color 0.2s;

      &:hover {
        color: inherit;
      }
    }

    small {
      color: $inc-gray-6;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<svelte:head>
  <title>Blog &middot; Lefty World</title>
  <meta name="description" content="Recent updates and ramblings from Lefty World"/>
  <meta property="og:description" content="Recent updates and ramblings from Lefty World"/>
  <meta property="og:image" content="/og.png"/>
  <meta property="og:title" content="Blog &middot; Lefty World"/>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>Recent updates and ramblings</h1>
</header>

<section>
  <ul>
    {#each posts as post}
      <li>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        <small>published {@html post.date ? replaceDashesWithDots(post.date) : ""} by {post.author.name}</small>
      </li>
    {/each}
  </ul>
</section>

<section>
  <h2>Elsewhere</h2>

  <ul>
    {#each sortedLinks as link}
      <li>
        <a
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
          title={link.title}
        >{link.title}</a>
        <small>published {@html replaceDashesWithDots(link.date)} by {link.author}</small>
      </li>
    {/each}
  </ul>
</section>
