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
  <title>Lefty.World</title>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>A refuge against the tyranny of righteousness!</h1>
</header>

<section>
  <p>Welcome to <code>lefty.world</code>, an online resource for some of the most creative and interesting people of the world — lefties (or, left-handed people).</p>

  <p>You won't <em>only</em> find interesting facts about the history of our <del>plight</del> good fortune. <strong>Oh no</strong>, you'll also find desktop wallpaper, memes, quotes from notable lefties, and more!</p>

  <p>History used to look down upon us but thankfully 1) a lot of us exist, 2) I know web design and development, and 3) this awesome domain was available. I hope you'll stay awhile and share with your favorite lefties!</p>

  <p>Everyone was born right-handed; the gifted ones get over it.</p>

  <p>&mdash; Paul Anthony Webb, Southpaw in Chief</p>
</section>
