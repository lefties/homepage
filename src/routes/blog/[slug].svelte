<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200)
      return { post: data };
    else
      this.error(res.status, data.message);
  }
</script>

<script>
  import Marquee from "~component/Marquee.svelte";
  import { ownership, replaceDashesWithDots } from "~util";

  export let post;
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;
    max-width: 800px;

    &:not(:last-of-type) {
      border-bottom: 1px solid $inc-gray-3;
    }
  }

  :global(.content) {
    :global(p),
    :global(ul) {
      font-size: 1rem;
      line-height: 1.55;
      margin-bottom: 1rem;

      :global(a) {
        color: $inc-blue-5;
        text-decoration: underline;
        transition: color 0.2s;

        &:hover {
          color: inherit;
        }
      }

      code {
        background-color: $inc-black;
        border-radius: 0.2rem;
        color: $inc-gray-1;
        font-size: 70%;
        padding: 0.2rem 0.5rem;
        position: relative;
        top: -1px;

        &::selection {
          background-color: inherit;
          color: inherit;
        }
      }
    }

    ul {
      list-style-type: disc;
    }
  }

  .content__end {
    font-size: 2.5rem;
    pointer-events: none;
  }

  .meta {
    border-bottom: 1px solid $inc-gray-3;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;

    a {
      font-weight: 600;
    }
  }
</style>

<svelte:head>
  <title>{post.metadata.title} &middot; Lefty World</title>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>{post.metadata.title}</h1>
</header>

<aside class="meta">
  <h5>published <time>{@html replaceDashesWithDots(post.metadata.date)}</time> by <a href="profiles/{post.metadata.profile}" rel="prefetch" title="{ownership(post.metadata.author)} profile">{post.metadata.author}</a></h5>
</aside>

<section class="content">
  {@html post.html}
  <div class="content__end">👈</div>
</section>

<section class="content">
  <p>
    <a href="blog">Back to blog posts</a>
  </p>
</section>
