<script>
  import Marquee from "~component/Marquee.svelte";
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
      &:first-child {
        font-weight: 600;
      }
    }

    a {
      color: $inc-blue-5;
      text-decoration: underline;
      transition: color 0.2s;

      &:hover {
        color: inherit;
      }
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<svelte:head>
	<title>FAQ &middot; Lefty World</title>
  <meta name="description" content="Frequently Asked Questions about Lefty World and lefties, in general."/>
  <meta property="og:description" content="Frequently Asked Questions about Lefty World and lefties, in general."/>
  <meta property="og:image" content="/og.png"/>
  <meta property="og:title" content="FAQ &middot; Lefty World"/>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>Frequently Asked Questions</h1>
</header>

<section>
  <ul>
    <li>Why does this site exist?</li>
    <li>The domain was perfect, I'd done nothing with it for three years, and this site was an excuse to be productive whilst neglecting bigger projects.</li>
  </ul>

  <ul>
    <li>I'm ambidexterous. Am I welcome here?</li>
    <li>Of course you're welcome here! Everyone is, really, <strong>but</strong> this space is primarily for people who are dominate left-handers and/or symptathize with our struggles and assimilation into a right-handed world.</li>
  </ul>

  <ul>
    <li>How do I get profiled here?</li>
    <li>I'm still working on that but to be sure opportunistic right-handers aren't trying to game the system, there will be a required 30-second video of writing with your left-hand to prove yourself. This will stop <em>most</em> scammers but I'm sure <a href="https://en.wikipedia.org/wiki/Branden_Miller" rel="noopener noreferrer" target="_blank" title="Joanne the Scammer's Wikipedia article">Joanne</a> will find a way.</li>
  </ul>
</section>
