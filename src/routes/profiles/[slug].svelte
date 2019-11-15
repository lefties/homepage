<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`profiles/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200)
      return { profile: data };
    else
      this.error(res.status, data.message);
  }
</script>

<script>
  // import { goto } from "@sapper/app";
  import Marquee from "~component/Marquee.svelte";
  import { ownership, replaceDashesWithDots } from "~util";

  export let profile;

  // if (!profile)
  //   goto(".");
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
    h2 {
      font-size: 1.5rem;
      font-style: italic;
      margin-bottom: 0.5rem;
    }

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

    figure {
      height: 300px;
      margin-bottom: 1rem;

      img {
        width: 100%; height: 100%;

        object-fit: cover;
        object-position: center;
      }
    }

    ul {
      list-style-type: none;

      li {
        &:first-child {
          font-weight: 600;
        }
      }
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
  }
</style>

<svelte:head>
  {#if profile && profile.metadata}
    <title>{ownership(profile.metadata.name)} profile &middot; Lefty World</title>
    <meta name="description" content={profile.metadata.blurb}/>
    <meta property="og:description" content={profile.metadata.blurb}/>
    <meta property="og:title" content="{ownership(profile.metadata.name)} profile &middot; Lefty World"/>

    {#if profile.metadata.portrait}
      <meta property="og:image" content="/profiles/{profile.slug}.jpg"/>
    {/if}
  {/if}
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>{profile && profile.metadata ? profile.metadata.name : "REDACTED"}</h1>
</header>

<aside class="meta">
  <h5>{@html profile && profile.metadata ? profile.metadata.blurb : "&infin;"}</h5>
</aside>

<section class="content">
  {#if profile && profile.metadata && profile.metadata.portrait}
    <figure>
      <img src="/profiles/{profile.slug}.jpg" alt="{ownership(profile.metadata.name)} portrait"/>
    </figure>
  {/if}

  {@html profile && profile.html ? profile.html : "REDACTED"}
  <div class="content__end">👈</div>
</section>

<section class="content">
  <p>Are you a lefty or ambidexterous with left-hand dominance and want to submit a profile?</p>
  <p>Send an email to <strong>southpaw@lefty.world</strong> with a link to a video of you writing a sentence (purely for verification purposes).</p>
</section>

<section class="content">
  <p>
    <a href="profiles">Back to profiles</a>
  </p>
</section>
