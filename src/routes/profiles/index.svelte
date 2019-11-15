<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`profiles.json`).then(r => r.json()).then(profiles => {
      return { profiles };
    });
  }
</script>

<script>
  import Marquee from "~component/Marquee.svelte";
  import { replaceDashesWithDots } from "~util";
  import { orderBy } from "natural-orderby";

  export let profiles;
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;
    max-width: 800px;
  }

  ul {
    font-size: 1rem;
    line-height: 1.55;

    li {
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
  <title>Profiles &middot; Lefty World</title>
  <meta name="description" content="Are you a lefty or ambidexterous with left-hand dominance and want to submit a profile? Get in touch!"/>
  <meta property="og:description" content="Are you a lefty or ambidexterous with left-hand dominance and want to submit a profile? Get in touch!"/>
  <meta property="og:image" content="/og.png"/>
  <meta property="og:title" content="Profiles &middot; Lefty World"/>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>Lefty Spotlight</h1>
</header>

<section>
  <ul>
    {#each profiles as profile}
      <li>
        <a rel="prefetch" href="profiles/{profile.slug}">{profile.name}</a>
        <small>{@html profile.blurb}</small>
      </li>
    {/each}
  </ul>
</section>
