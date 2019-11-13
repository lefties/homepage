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

  p {
    font-size: 1rem;
    line-height: 1.55;

    a {
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

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<svelte:head>
	<title>About &middot; Lefty World</title>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>About this site</h1>
</header>

<section>
  <p><code>lefty.world</code> is built with <a href="https://svelte.dev" rel="noopener noreferrer" target="_blank" title="Cybernetically enhanced web apps">Svelte</a>, a <em>blazing fast</em> JavaScript framework. For SEO purposes we are using <a href="https://sapper.svelte.dev" rel="noopener noreferrer" target="_blank" title="The next small thing in web development">Sapper</a>, Svelte's server-side rendering component.</p>

  <p>For styling we use <a href="https://sass-lang.com" rel="noopener noreferrer" target="_blank" title="CSS with superpowers">Sass</a> and a design framework custom for !NC properties and creations (like this one).</p>

  <p>Hosting is done via <a href="https://m.do.co/c/fd45d6b57e0f" rel="noopener noreferrer" target="_blank" title="VPS provider">DigitalOcean</a> (referral link) and our domain is through <a href="https://www.hover.com" rel="noopener noreferrer" target="_blank" title="Domain registrar">Hover</a> (although, <a href="https://www.gandi.net" rel="noopener noreferrer" target="_blank" title="Another domain registrar">Gandi</a> is looking pretty good&hellip;).</p>

  <p><a href="https://dsgn.agency" rel="noopener noreferrer" target="_blank" title="Design studio">dsgn.</a> is responsible for ideation and development. If you need work done for your web app or iOS app, check them out!</p>
</section>
