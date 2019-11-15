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

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<svelte:head>
	<title>Celebration &middot; Lefty World</title>
  <meta name="description" content="You're gonna have to wait until August 13th, 2020..."/>
  <meta property="og:description" content="You're gonna have to wait until August 13th, 2020..."/>
  <meta property="og:image" content="/og.png"/>
  <meta property="og:title" content="Celebration &middot; Lefty World"/>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>Celebration Time</h1>
</header>

<section>
  <p>You're gonna have to wait until August 13th, 2020...</p>
</section>
